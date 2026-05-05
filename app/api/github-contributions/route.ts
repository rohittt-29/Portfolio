import { NextResponse } from 'next/server';

// Cache the response for 1 hour to avoid hammering GitHub's API
export const revalidate = 3600;

const GITHUB_USERNAME = 'rohittt-29';

// GitHub GraphQL query to get contribution calendar
const CONTRIBUTION_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
  level: 0 | 1 | 2 | 3 | 4;
};

function countToLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  // ── Fallback: use public contributions API if no token ──
  if (!token) {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Public API error: ${res.status}`);
      const data = await res.json();
      return NextResponse.json(data, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    } catch (err) {
      console.error('[GitHub Contributions] Public API fallback failed:', err);
      return NextResponse.json(
        { error: 'Failed to fetch GitHub contributions' },
        { status: 502 }
      );
    }
  }

  // ── Primary: GitHub GraphQL API with auth token ──
  try {
    const graphqlRes = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Portfolio-App',
      },
      body: JSON.stringify({ query: CONTRIBUTION_QUERY, variables: { username: GITHUB_USERNAME } }),
      next: { revalidate: 3600 },
    });

    if (!graphqlRes.ok) throw new Error(`GitHub GraphQL error: ${graphqlRes.status}`);

    const { data, errors } = await graphqlRes.json();
    if (errors?.length) throw new Error(errors[0].message);

    const calendar = data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) throw new Error('No calendar data in response');

    // Flatten weeks → days and transform into react-activity-calendar format
    const contributions: ContributionDay[] = [];
    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        contributions.push({
          date: day.date,
          contributionCount: day.contributionCount,
          color: day.color,
          level: countToLevel(day.contributionCount),
        });
      }
    }

    return NextResponse.json(
      { contributions, total: calendar.totalContributions },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } }
    );
  } catch (err) {
    console.error('[GitHub Contributions] GraphQL fetch failed:', err);

    // ── Secondary fallback: public API ──
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Public API error: ${res.status}`);
      const data = await res.json();
      return NextResponse.json(data, {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
      });
    } catch (fallbackErr) {
      console.error('[GitHub Contributions] All fetches failed:', fallbackErr);
      return NextResponse.json(
        { error: 'Failed to fetch GitHub contributions' },
        { status: 502 }
      );
    }
  }
}
