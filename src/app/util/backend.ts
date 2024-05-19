"use server";

import { Category } from "../types/enums";
import { QuizType } from "../types/types";
import sleep from "./setTimeout";

export const pushMethod = async (formData: FormData) => {
  const value = formData.get("type");
  if (value === "alphabet") {
    return Category.math;
  }
  if (value === "math") {
    return Category.alphabet;
  }
};

export const fetchQuestion = async (category: Category) => {
  const questionListData = await fetch(`http://127.0.0.1:8090/api/collections/category/records/${category}`, { cache: "no-store" });
  const questionList = await questionListData.json();
  sleep(200);
  return questionList.quizItem;
};

export const fetchQuiz = async (serial: string) => {
  try {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/quiz/records/${serial}`, { cache: "no-store" });
    const data = await res.json();
    return {
      options: data.options,
      question: data.question,
      answer: data.answer,
      selected: data.selected,
    } as QuizType;
  } catch (error) {
    console.error(error);
  }
};

export const changeSelected = async (quizSerial: string, optionSerial: string) => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/quiz/records/${quizSerial}`, {
    cache: "no-store",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      selected: optionSerial,
    }),
  });
  await res.json();

  return null;
};
