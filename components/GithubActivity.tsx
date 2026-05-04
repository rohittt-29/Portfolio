'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GithubActivity() {
  return (
    <section className="py-10" id="github">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-6">
        GitHub Activity
      </h2>

      <div className="overflow-x-auto -mx-2">
        <div className="min-w-[280px]">
          <GitHubCalendar
            username="rohittt-29"
            colorScheme="dark"
            theme={{
              dark: ['#111111', '#1a2f1a', '#255c25', '#2d8a2d', '#4ade80'],
            }}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
            fontSize={12}
            blockSize={10}
            blockMargin={3}
            style={{ color: '#555555' }}
          />
        </div>
      </div>
    </section>
  );
}
