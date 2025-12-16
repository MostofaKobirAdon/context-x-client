import React from "react";
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";

const Faq = () => {
  const questions = [
    {
      question: "What is ContestX?",
      answer:
        "ContestX is an online platform where users can explore, join, and manage creative contests such as design, writing, and idea-based competitions.",
    },
    {
      question: "How do I join a contest on ContestX?",
      answer:
        "To join a contest, create an account, select a contest, complete the payment, and submit your task before the deadline.",
    },
    {
      question: "Do I need to pay to participate in contests?",
      answer:
        "Yes, most contests on ContestX require a small entry fee, which is clearly mentioned on the contest details page.",
    },
    {
      question: "Is the contest entry fee refundable?",
      answer:
        "No, once a contest has started and your registration is confirmed, the entry fee is non-refundable.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Contest creators carefully review all submitted tasks and declare one winner after the contest deadline ends.",
    },
    {
      question: "When will the contest winner be announced?",
      answer:
        "Winners are usually announced shortly after the contest deadline, once the creator finishes reviewing all submissions.",
    },
    {
      question: "Can I participate in multiple contests at the same time?",
      answer:
        "Yes, users can participate in multiple contests simultaneously as long as they meet the requirements and deadlines.",
    },
    {
      question: "Who can create contests on ContestX?",
      answer:
        "Only users with the Contest Creator role can create and manage contests on ContestX.",
    },
    {
      question: "How can I submit my contest task?",
      answer:
        "After successful registration, a submit task button will appear where you can provide your work link or required information.",
    },
    {
      question: "Can I update my profile information?",
      answer:
        "Yes, users can update their name, profile photo, and additional details from the dashboard profile section.",
    },
  ];

  return (
    <div>
      <div className="mt-4">
        <div data-aos="fade-down" className="text-center">
          <h1 className="section-heading">
            Frequently Asked{" "}
            <span className="font-bold text-primary">Questions</span>
          </h1>
          <p className="subtext">
            Find answers to common questions about ContestX
          </p>
        </div>
        <div data-aos="fade-up" className="flex justify-between ">
          <img
            src={q1}
            alt=""
            className="w-[43%] object-cover overflow-hidden"
          />
          <img
            src={q2}
            alt=""
            className="w-[43%] object-cover overflow-hidden"
          />
        </div>
      </div>
      <div className=" ">
        {questions.map((q, index) => (
          <div
            data-aos="fade-up"
            key={index}
            tabIndex={0}
            className="collapse mt-2 collapse-arrow text-secondary bg-primary/40 "
          >
            <div className="collapse-title font-semibold">
              <span>{index + 1} . </span> {q.question}
            </div>
            <div className="collapse-content text-sm">{q.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
