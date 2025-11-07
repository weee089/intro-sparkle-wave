import { useState, useEffect } from 'react';

const phrases = [
  "Create a marketing analytics dashboard with real-time data...",
  "Build a customer onboarding workflow with task assignments...",
  "Generate a SaaS landing page with feature sections...",
  "Make a personal finance tracker with categories and graphs...",
  "Design a project management hub for remote teams..."
];

export const useTypingPlaceholder = () => {
  const [placeholder, setPlaceholder] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseAfterComplete = 2000;

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setPlaceholder(currentPhrase.slice(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, phraseIndex, isDeleting]);

  return placeholder;
};
