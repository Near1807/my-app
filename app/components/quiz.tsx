"use client";
import { PassThrough } from "stream";
import { GetAnswers, GetQuestions } from "../Fly_Quiz/questions";
import { Card } from "./cv";
import { Text, Title } from "./cv";
import React, { use, useState } from "react";

export function QuizCard(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className={`flex justify-center items-center ${props.className}`}>
      {props.children}
    </Card>
  );
}

export function QuizLink(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="flex items-center justify-center rounded-2xl w-20 h-8 bg-sky-100 hover:bg-sky-200"
      href={props.href}
    >
      {props.children}
    </a>
  );
}

export function Question(props: {
  activeQuestion: number;
  children: number;
  onAnswer: (value: number) => void;
  score?: number;
  quiz: number;
}) {
  const activeQuestion = props.children;
  const question = GetQuestions(props.quiz)[activeQuestion];

  function handleAnswer(index: number) {
    const value = question.values[index];
    props.onAnswer(value);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <Text>{question.question}</Text>
      <div className="grid grid-cols-2">
        {question.options.map((option, index) => (
          <button
            onClick={() => handleAnswer(index)}
            key={index}
            className="m-2 px-3 rounded-2xl hover:bg-sky-200 bg-sky-100 text-black"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Result(props: { score: number; quiz: number }) {
  const answers = GetAnswers(props.quiz) as Record<number, string>;
  const keys = Object.keys(answers).map((k) => parseInt(k, 10));
  let Key = 0;

  for (let i = 0; i < keys.length; i++) {
    if (props.score > keys[i]) {
      Key = keys[i];
    } else {
      Key = keys[i];
      break;
    }
  }
  return (
    <div className="flex flex-col">
      <Title>Congrats !</Title>
      <Text className="mb-4">{answers[Key]}</Text>
      <a
        className="p-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-center"
        href="/Quizes"
      >
        Go to Next Quiz
      </a>
    </div>
  );
}
