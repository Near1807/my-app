import React from "react";
import { QuizCard, QuizLink } from "../components/quiz";
import { Title } from "../components/cv";

export default function BeeQuizMainPage(){
    return(
        <div className="flex transition-colors duration-200 bg-white dark:bg-black min-h-screen items-center justify-center">
            <QuizCard className="flex flex-col w-150 h-150 text-black dark:text-white">
                <img className="w-150 p-5" src="/images/voler.jpg"/>
                <Title className="">What Fly are you ?</Title>
                <button className="px-3 rounded-2xl hover:bg-sky-200 bg-sky-100 text-black">Start Quiz</button>      
            </QuizCard>
        </div>  
    )
}   