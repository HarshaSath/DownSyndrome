"use client"
import "./page.css"
import { useState } from "react";
import Swal from "sweetalert2";

export default function Quiz3() {
  const [answers, setAnswers] = useState({
    theoryAnswer: "",
    codeAnswer: "",
  });

  const correctAnswers = {
    theoryAnswer: "A variable is a storage location in a program that holds a value.",
    codeAnswer: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello, C Programming!\");\n  return 0;\n}",
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
    for (const question in answers) {
      if (answers[question] !== correctAnswers[question]) {
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
      `Theory Question: ${correctAnswers.theoryAnswer}\n\nCoding Question:\n${correctAnswers.codeAnswer}`,
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
          <h1>Quiz 3</h1>
          <div className="mt-4">
            <div>
              <h3>Theory Question:</h3>
              <p>What is a variable in programming?</p>
              <textarea
                className="form-control"
                name="theoryAnswer"
                value={answers.theoryAnswer}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            <div className="mt-4">
              <h3>Coding Question:</h3>
              <p>Write a C program to display "Hello, C Programming!" using the printf function.</p>
              <textarea
                className="form-control"
                name="codeAnswer"
                value={answers.codeAnswer}
                onChange={handleInputChange}
                rows="6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
