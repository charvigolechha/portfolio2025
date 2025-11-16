import React, { useEffect, useRef, useState } from "react";

const TITLES = [
  "Wannabe Analyst",
  "Self-Taught Skater",
  "Curious Researcher",
  "Figma Power User",
  "Game Psychology Nerd",
  "\"Racoon that needs therapy\"",
  "Story Collector"
];

export default function TypewriterTitles() {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  // Always show this prefix
  const prefix = "UX Researcher • Product Designer • ";

  useEffect(() => {
    let timeout;

    if (pause) {
      timeout = setTimeout(() => setPause(false), 900);
      return () => clearTimeout(timeout);
    }

    if (!deleting && charIdx < TITLES[titleIdx].length) {
      timeout = setTimeout(() => {
        setDisplayed(TITLES[titleIdx].slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 60);
    } else if (!deleting && charIdx === TITLES[titleIdx].length) {
      timeout = setTimeout(() => {
        setPause(true);
        setDeleting(true);
      }, 900);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(TITLES[titleIdx].slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 40);
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