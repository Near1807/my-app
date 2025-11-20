"use client";
import { use, useState } from "react";
import { QuizCard, QuizLink, Question, Result } from "../components/quiz";
import { Title } from "../components/cv";
import { GetQuestions_Type } from "./questions";

export default function FlyQuizMainPage() {
  const [quiz, setQuiz] = useState(0);
  const [Current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changePlaying = () => {
    setPlaying(!playing);
  };
  const handleAnswer = (value: number) => {
    setScore((prevScore) => prevScore + value);

    const questions = GetQuestions_Type(quiz);

    if (Current >= questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="flex transition-colors duration-200 bg-white dark:bg-black min-h-screen items-center justify-center">
      <QuizCard className="flex flex-col w-150 h-150 text-black dark:text-white">
        <img className="w-150 p-5" src="/images/voler.jpg" />
        <Title className="">What Fly are you ?</Title>
        {playing ? null : (
          <div className="p-4">
            <button
              onClick={changePlaying}
              className="px-3 p-2 rounded-2xl hover:bg-sky-200 bg-sky-100 text-black"
            >
              Start Quiz
            </button>
          </div>
        )}
        {playing && showResult ? (
          <div>
            <Result quiz={quiz} score={score}></Result>
          </div>
        ) : null}
        {playing && !showResult ? (
          <div>
            <Question
              quiz={quiz}
              score={score}
              onAnswer={handleAnswer}
              activeQuestion={Current}
            >
              {Current}
            </Question>
          </div>
        ) : null}
      </QuizCard>
    </div>
  );
}
