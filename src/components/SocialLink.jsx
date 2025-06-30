import React from 'react'
    "use client";



import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Github, Linkedin, Link } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialButton({
    className,
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const shareButtons = [
        { icon: Twitter, label: "Share on Twitter",href: "https://x.com/rohittt_mali?t=RhZUcrMBKhNQMrZbRtJt5A&s=09"  },
        { icon: Github, label: "Share on Github", href:"https://github.com/rohittt-29"  },
        { icon: Linkedin, label: "Share on LinkedIn" , href:"https://www.linkedin.com/in/rohit-mali-163267257/overlay/contact-info/"},
        { icon: Link, label: "Copy link" },
    ];

    const handleShare = (index) => {
        setActiveIndex(index);
        setTimeout(() => setActiveIndex(null), 300);
    };


  

    return (
        <div className=''>
       <div className="  relative inline-block  rounded-md"

            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <motion.div
                animate={{
                    opacity: isVisible ? 0 : 1,
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
            >
                <Button
                    className={cn(
                        "min-w-40 relative",
                        "bg-white dark:bg-black",
                        "hover:bg-gray-50 dark:hover:bg-gray-950",
                        "text-black dark:text-white",
                        "border border-black/10 dark:border-white/10",
                        "transition-colors duration-200",
                        className
                    )}
                    {...props}
                >
                    <span className="flex items-center gap-2">
                        <Link className="w-4 h-4" />
                        Social links
                    </span>
                </Button>
            </motion.div>

            <motion.div
                className="absolute top-0 left-0 flex h-10 overflow-hidden rounded-md"
                animate={{
                    width: isVisible ? "auto" : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                }}
            >
                {shareButtons.map((button, i) => (
                    <motion.a
                          href={button.href}
                           target="_blank"
                              rel="noopener noreferrer"
                        key={`share-${button.label}`}
                        aria-label={button.label}
                        onClick={() => handleShare(i)}
                        className={cn(
                            "h-10",
                            "w-10",
                            "flex items-center justify-center",
                            "bg-black dark:bg-white",
                            "text-white dark:text-black",
                            i === 0 && "rounded-l-md",
                            i === 3 && "rounded-r-md",
                            "border-r border-white/10 dark:border-black/10 last:border-r-0",
                            "hover:bg-gray-900 dark:hover:bg-gray-100",
                            "outline-none",
                            "relative overflow-hidden",
                            "transition-colors duration-200"
                        )}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : -20,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.23, 1, 0.32, 1],
                            delay: isVisible ? i * 0.05 : 0,
                        }}
                    >
                        <motion.div
                            className="relative z-10"
                            animate={{
                                scale: activeIndex === i ? 0.85 : 1,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        >
                            <button.icon className="w-4 h-4" />
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-white dark:bg-black"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeIndex === i ? 0.15 : 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.a>
                ))}
            </motion.div>
        </div>
        </div>
    );



}

// export default SocialLink;
