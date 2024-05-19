"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Category } from "../types/enums";
import { fetchQuestion } from "../util/backend";
import Quiz from "@/components/Quiz";

const StatePage = () => {
  const [category, setCategory] = useState<Category>(Category.math);
  const [quizDataList, setQuizDataList] = useState<string[] | null>(null);
  const fetchList = async (category: Category) => {
    const list = await fetchQuestion(category);
    setQuizDataList(list);
  };
  const datalistChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "math") {
      setCategory(Category.math);
    }
    if (value === "alphabet") {
      setCategory(Category.alphabet);
    }
  };
  useEffect(() => {
    fetchList(category);
  }, [category]);
  return (
    <div>
      <select onChange={datalistChangeHandler}>
        <option value="math" defaultChecked>
          math
        </option>
        <option value="alphabet">alphabet</option>
      </select>
      {quizDataList?.map((question) => <Quiz setTestSelected={null} testSelected={0} page={null} setPoint={null} point={null} setPages={null} isPractice={true} key={question} serial={question} />)}
    </div>
  );
};

export default StatePage;
