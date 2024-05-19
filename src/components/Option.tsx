"use client";

import { OptionProps, OptionType } from "@/app/types/types";
import React, { useEffect, useState } from "react";
import Radio from "./Radio";

const OptionItem = ({ idx, serial, answer, selected, isAnswerViewed, isPractice, setTestSelected, setIsAnswerViewed, setIsCurrentAnswer, setSelected, testSelected }: OptionProps) => {
  const [optionData, setOptionData] = useState<OptionType>();
  useEffect(() => {
    fetchOptionItemData({ serial, answer } as OptionProps).then((data) => {
      setOptionData(data as OptionType);
    });
  }, [serial, answer, selected, setIsCurrentAnswer]);

  return (
    <div id={optionData?.id} className="flex my-2 mx-4 items-center bg-white rounded-lg hover:border-2 border-red-800 hover:cursor-pointer">
      <div className={`${!isAnswerViewed && "hidden"} ml-4 w-6 h-6 rounded-full shadow-md ${answer ? "bg-green-700" : "bg-red-800"}`}></div>
      <Radio
        idx={idx}
        setIsAnswerViewed={setIsAnswerViewed}
        setIsCurrentAnswer={setIsCurrentAnswer}
        serial={optionData?.id as string}
        labelText={optionData?.text as string}
        selected={selected}
        quiz={optionData?.quiz as string}
        answer={answer}
        setSelected={setSelected}
        isPractice={isPractice}
        testSelected={testSelected}
        setTestSelected={setTestSelected}
      />
    </div>
  );
};

const fetchOptionItemData = async ({ serial, answer, selected }: OptionProps) => {
  try {
    const optionData = await (await fetch(`http://127.0.0.1:8090/api/collections/option/records/${serial}`)).json();
    return {
      id: optionData.id,
      text: optionData.text,
      answer: answer,
      selected: selected,
      quiz: optionData.quiz,
    } as OptionType;
  } catch (error) {
    console.error(error);
  }
};

export default OptionItem;
