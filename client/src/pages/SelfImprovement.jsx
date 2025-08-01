import React from "react";
import "../styles/Self-Improvement.css";

const selfImprovementBooks = [
  {
    title: "Atomic Habits",
    description: "Learn how small habits can lead to big changes.",
  },
  {
    title: "Deep Work",
    description: "Rules for focused success in a distracted world.",
  },
  {
    title: "Mindset",
    description: "The new psychology of success by Carol S. Dweck.",
  },
  {
    title: "The 5 AM Club",
    description: "Own your morning. Elevate your life.",
  },
];

const SelfImprovement = () => {
  return (
    <div className="self-page">
      <h1>Self-Improvement Zone</h1>
      <div className="self-grid">
        {selfImprovementBooks.map((book, index) => (
          <div className="self-card" key={index}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfImprovement;
