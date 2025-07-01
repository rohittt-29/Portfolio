"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




const greetings = [
    { text: "Hello", language: "English" },
      { text: "नमस्ते ", language: "hindi" },
       { text: "হ্যালো ", language: "hindi" },
        { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ", language: "hindi" },
         { text: "வணக்கம் ", language: "hindi" },
        { text: "హలో ", language: "hindi" },
         { text: "مرحبا  ", language: "hindi" },
       { text: "Привет ", language: "hindi" },
         { text: "नमस्कार ", language: "hindi" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Bonjour", language: "French" },
    { text: "Hola", language: "Spanish" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "こんにちは", language: "Japanese" },
     { text: "Hello", language: "English" },
];

const DynamicText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;

                if (nextIndex >= greetings.length) {
                    clearInterval(interval);
                    setIsAnimating(false);
                    return prevIndex;
                }

                return nextIndex;
            });
        }, 400);

        return () => clearInterval(interval);
    }, [isAnimating]);

    // Animation variants for the text
    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
    };

    return (
        <section
            className="flex min-h-[40px] items-center justify-center gap-1 "
            aria-label="Rapid greetings in different languages"
        >
            <div className="relative h-5 w-60 flex  overflow-visible">
                {isAnimating ? (
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            className="absolute flex items-center gap-2 text-xl font-medium text-gray-800 dark:text-gray-200"
                            aria-live="off"
                            initial={textVariants.hidden}
                            animate={textVariants.visible}
                            exit={textVariants.exit}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div
                                className="h-2 w-2 rounded-full bg-black dark:bg-white"
                                aria-hidden="true"
                            />
                            {greetings[currentIndex].text}
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="flex items-center gap-2 text-2xl font-medium text-gray-800 dark:text-gray-200">
                        <div
                            className="h-2 w-2 rounded-full bg-black dark:bg-white"
                            aria-hidden="true"
                        />
                        {greetings[currentIndex].text}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DynamicText;
