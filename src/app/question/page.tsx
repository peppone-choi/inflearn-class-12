import React from "react";
import { Category } from "../types/enums";
import Quiz from "@/components/Quiz";
import { fetchQuestion } from "../util/backend";
const QuestionPage = async () => {
  const questions = (await fetchQuestion(Category.general)) as string[];
  return (
    <div className="">
      {questions.map((question) => (
        <Quiz setTestSelected={null} testSelected={0} page={null} point={null} setPoint={null} setPages={null} isPractice={true} key={question} serial={question} />
      ))}
    </div>
  );
};

export default QuestionPage;
