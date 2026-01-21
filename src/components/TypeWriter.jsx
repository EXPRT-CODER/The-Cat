import { useState, useEffect } from "react";

const texts = [
  "Hey There...",
  "Whats Up...",
  "I was waiting for you...",
  "Meow Meow Meow...",
];

const TypeWriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(" |");

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
        setBlink(prev => (prev === " |" ? "" : " |"));
    }, 500);

    return () => clearInterval(blinkInterval);
    }, []);

  return <h1>{texts[textIndex].slice(0, charIndex)}{blink}</h1>;
};

export default TypeWriter;
