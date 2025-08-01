import React from "react";
import "../styles/Educational.css";

const educationalResources = [
  {
    title: "Khan Academy",
    description: "Free online courses in math, science, economics, and more.",
    link: "https://www.khanacademy.org/",
  },
  {
    title: "Coursera",
    description: "University-level courses on a wide range of topics.",
    link: "https://www.coursera.org/",
  },
  {
    title: "edX",
    description: "Professional and academic courses from top institutions.",
    link: "https://www.edx.org/",
  },
  {
    title: "MIT OpenCourseWare",
    description: "Access MIT’s course materials for free.",
    link: "https://ocw.mit.edu/",
  },
  {
    title: "Academic Earth",
    description: "Free video courses from leading universities.",
    link: "http://academicearth.org/",
  },
];

const Educational = () => {
  return (
    <div className="educational-page">
      <h1>Educational Resources</h1>
      <p className="subtitle">
        Explore top platforms offering free and paid educational content to enhance your knowledge.
      </p>

      <div className="edu-grid">
        {educationalResources.map((resource, index) => (
          <div className="edu-card" key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <button>Visit Site</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educational;
