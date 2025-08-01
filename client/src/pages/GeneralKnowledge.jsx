import React from "react";
// import "../styles/GeneralKnowledge.css";
import "../styles/GeneralKnowledge.css";


const GeneralKnowledge = () => {
  return (
    <div className="gk-page">
      <h1>General Knowledge Books</h1>
      <div className="books-grid">
        <div className="book-card">
          <h3>Lucent's GK</h3>
          <p>A comprehensive book covering all static general knowledge topics.</p>
        </div>
        <div className="book-card">
          <h3>Manorama Yearbook</h3>
          <p>Annual reference with current affairs, facts, and figures.</p>
        </div>
        <div className="book-card">
          <h3>Arihant General Knowledge</h3>
          <p>Well-structured guide for competitive exams.</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralKnowledge;
