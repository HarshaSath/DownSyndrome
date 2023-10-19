"use client"
import "./page.css"
import { useState } from "react";
import Swal from "sweetalert2";

export default function Quiz1() {
  const [answers, setAnswers] = useState({
    blank1: "",
    blank2: "",
  });

  const correctAnswers = {
    blank1: "int",
    blank2: "printf",
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
      `1. Variable declaration keyword: ${correctAnswers.blank1}\n2. Print function in C: ${correctAnswers.blank2}`,
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
          <h1>Quiz 1</h1>
          <div className="mt-4">
            <div>
              <label>Enter the correct keyword for variable declaration: </label><br/>
              <input
                type="text"
                className="form-control"
                name="blank1"
                value={answers.blank1}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-3">
              <label>What function is used to print output in C? </label><br/>
              <input
                type="text"
                className="form-control"
                name="blank2"
                value={answers.blank2}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
