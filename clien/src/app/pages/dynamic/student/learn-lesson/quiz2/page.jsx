"use client"
import "./page.css"
import { useState } from "react";
import Swal from "sweetalert2";

export default function Quiz2() {
  const [answers, setAnswers] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
  });

  const correctAnswers = {
    blank1: "int",
    blank2: "main",
    blank3: "printf",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const checkAnswers = () => {
    let allCorrect = true;
    for (const blank in answers) {
      if (answers[blank] !== correctAnswers[blank]) {
        allCorrect = false;
        break;
      }
    }

    if (allCorrect) {
      Swal.fire("Success!", "Congratulations! Your answers are correct.", "success");
    } else {
      Swal.fire("Oops!", "Some answers are incorrect. Please try again.", "error");
    }
  };

  const viewAnswers = () => {
    Swal.fire(
      "Correct Answers",
      `1. Answer: ${correctAnswers.blank1}\n2. Answer: ${correctAnswers.blank2}\n3. Answer: ${correctAnswers.blank3}`,
      "info"
    );
  };

  return (
    <div className="container-fluid bg-dark vh-100">
      <div className="container mt-5 pt-3">
        <div className="card bg-custom-color text-dark p-4 position-relative">
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={checkAnswers}>
              Check Answer
            </button>
            <button className="btn btn-secondary ms-2" onClick={viewAnswers}>
              View Answer
            </button>
          </div>
          <h1>Quiz 2</h1>
          <div className="mt-4">
            <pre>
              <code>
                {`#include <_______.h>

______ _______() {
  _______("Hello, C Programming!");
  return 0;
}`}
              </code>
            </pre>
            <input
              type="text"
              className="form-control mb-2"
              name="blank1"
              value={answers.blank1}
              onChange={handleInputChange}
              placeholder="Answer 1"
            />
            <input
              type="text"
              className="form-control mb-2"
              name="blank2"
              value={answers.blank2}
              onChange={handleInputChange}
              placeholder="Answer 2"
            />
            <input
              type="text"
              className="form-control"
              name="blank3"
              value={answers.blank3}
              onChange={handleInputChange}
              placeholder="Answer 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
