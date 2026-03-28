import React, { useEffect, useRef, useState } from "react";

const TITLES = [
  "Wannabe Analyst 📈",
  "Pixel Monk 📿",
  "Pattern spotter 🔍",
  "Serial Hobbyist 🧶",
  "Self-Taught Skater 🛼",
  "Human Swiss Army Knife 🧰",
];

export default function TypewriterTitles() {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  // JSX prefix with blue dots
  const prefix = (
    <>
      UX Researcher <span className="text-blue-700 font-bold">•</span> Product Designer <span className="text-blue-700 font-bold">•</span>{" "}
    </>
  );

  useEffect(() => {
    let timeout;
    const currentTitleArr = Array.from(TITLES[titleIdx]);

    if (pause) {
      timeout = setTimeout(() => setPause(false), 900);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIdx < currentTitleArr.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitleArr.slice(0, charIdx + 1).join(""));
        setCharIdx(charIdx + 1);
      }, 70);
    } else if (!deleting && charIdx === currentTitleArr.length) {
      timeout = setTimeout(() => {
        setPause(true);
        setDeleting(true);
      }, 900);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentTitleArr.slice(0, charIdx - 1).join(""));
        setCharIdx(charIdx - 1);
      }, 50);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIdx((titleIdx + 1) % TITLES.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, pause, titleIdx]);

  return (
    <span>
      {prefix}
      <span className="typewriter-text">{displayed}</span>
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}