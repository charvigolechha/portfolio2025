import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Button
        as={Link}
        to="/"
      >
        ← Back to Home
      </Button>
      <Button
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
      {/* ...rest of your homepage content... */}
    </div>
  );
}