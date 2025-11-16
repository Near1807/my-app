import React from "react"; 
import { Card, Title } from "../components/cv";
import { QuizCard, QuizLink } from "../components/quiz";

export default function QuizesMainPage(){
    return(
        <div className="transition-colors duration-200 bg-white dark:bg-black">
            <div className="grid lg:grid-cols-3 gap-4 p-4 min-h-screen">
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Fly_Quiz">Fly Quiz</QuizLink>
                </QuizCard>
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Bee_Quiz">Bee Quiz</QuizLink>
                </QuizCard>
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Bee_Quiz">Bee Quiz</QuizLink>
                </QuizCard>
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Bee_Quiz">Bee Quiz</QuizLink>
                </QuizCard>
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Bee_Quiz">Bee Quiz</QuizLink>
                </QuizCard>
                <QuizCard className="flex flex-col gap-4">
                    <Title className="text-center">Comming Soon</Title>
                    <QuizLink href="/Bee_Quiz">Bee Quiz</QuizLink>
                </QuizCard>
            </div>
        </div>
    )
}