"use client";
import { use, useState } from "react";
import { QuizCard, QuizLink, Question, Result } from "../components/quiz";
import { Title } from "../components/cv";
import { GetQuestions } from "./questions";

export default function FlyQuizMainPage() {
  const [Current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const changePlaying = () => {
    setPlaying(!playing);
  };
  const handleAnswer = (value: number) => {
    setScore(score + value);
    {
      Current > GetQuestions.length - 1
        ? setShowResult(true)
        : setCurrent(Current + 1);
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
        {playing && !showResult ? (
          <div>
            <Question quiz={0} score={score} onAnswer={handleAnswer}>
              {Current}
            </Question>
          </div>
        ) : null}
        {playing && showResult ? (
          <div>
            <Result quiz={0} score={score}></Result>
          </div>
        ) : null}
      </QuizCard>
    </div>
  );
}
