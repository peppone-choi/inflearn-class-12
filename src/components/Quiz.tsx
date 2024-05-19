"use client";

import React, { useEffect, useState } from "react";
import OptionItem from "./Option";
import { QuizProp, QuizType } from "@/app/types/types";
import { changeSelected, fetchQuiz } from "@/app/util/backend";
import { useRouter } from "next/navigation";

const Quiz = ({ page, setPages, setPoint, point, serial, isPractice, testSelected, setTestSelected }: QuizProp) => {
  const [quiz, setQuiz] = useState<QuizType>();
  const [isCurrentAnswer, setIsCurrentAnswer] = useState<boolean>(false);
  const [isAnswerViewed, setIsAnswerViewed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const router = useRouter();
  useEffect(() => {
    fetchQuiz(serial).then((data) => {
      setQuiz(data);
      setSelected(data?.selected as string);
    });
  }, [serial]);
  useEffect(() => {
    changeSelected(serial, selected as string);
  }, [serial, selected]);

  const handleCurrentAnswer = () => {
    setIsCurrentAnswer(selected === (quiz?.answer as String));
    return null;
  };

  const handleTestTrue = () => {
    return quiz?.options?.[testSelected] === (quiz?.answer as String);
  };

  return (
    <div
      id={serial}
      className={`${isAnswerViewed && "border-2"} ${isCurrentAnswer ? "border-green-800" : "border-red-800"} px-4 py-4 bg-red-100 mx-4 my-3 flex-col items-center h-auto w-[calc(100vw-2rem)] rounded-lg shadow-lg`}
    >
      <div className="px-4 mt-2 mb-4 text-lg">
        <h2>{quiz?.question}</h2>
      </div>
      <div>
        {quiz?.options.map((option, idx) => (
          <OptionItem
            idx={idx}
            isPractice={isPractice}
            setIsCurrentAnswer={setIsCurrentAnswer}
            setIsAnswerViewed={setIsAnswerViewed}
            setSelected={setSelected}
            isAnswerViewed={isAnswerViewed}
            selected={quiz?.selected === option}
            key={option}
            serial={option}
            answer={quiz?.answer === option}
            testSelected={testSelected as number}
            setTestSelected={setTestSelected}
          />
        ))}
      </div>
      <div
        onClick={() => {
          handleCurrentAnswer();
          setIsAnswerViewed(!isAnswerViewed);
          router.refresh();
        }}
        className={`${!isPractice || !selected ? "hidden" : ""} flex items-center justify-center py-3 my-2 mx-4 px-4 w-[calc(100%-2rem)] rounded-md bg-blue-700 text-white`}
      >
        정답을 확인하세요!
      </div>
      <div className={`${isPractice && "hidden"} flex items-center justify-end w-[calc(100%)]`}>
        <button
          onClick={() => {
            if (point !== null && setPoint !== null && page !== null && setPages !== null) {
              if (handleTestTrue()) {
                const newPoint = point + 1;
                setPoint(newPoint);
              }
              const nextPage = page + 1;
              setPages(nextPage);
              console.log(point, page);
            }
          }}
          className="flex items-center justify-center py-3 mr-4 px-4 w-32 rounded-md bg-blue-700 text-white"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Quiz;
