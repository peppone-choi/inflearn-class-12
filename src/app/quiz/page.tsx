"use client";

import React, { useEffect, useState } from "react";
import { Category } from "../types/enums";
import { fetchQuestion, fetchQuiz, pushMethod } from "../util/backend";
import Quiz from "@/components/Quiz";
import { useRouter } from "next/navigation";

const QuizPage = () => {
  const [type, setType] = useState<Category | null>(null);
  const [pages, setPages] = useState<number>(0);
  const [lists, setLists] = useState<string[] | null>(null);
  const [point, setPoint] = useState<number>(0);
  const [testSelected, setTestSelected] = useState<number | null>(null);
  const renderStartForm = () => {
    return (
      <div className="flex-row bg-white w-[calc(100vw-6rem)] p-10 rounded-lg shadow-xl">
        <h1 className="text-2xl mx-4 font-bold">상태 선택</h1>
        <form
          action={async (formData: FormData) => {
            const gettedType = (await pushMethod(formData)) as Category;
            setType(gettedType);
          }}
          className="flex-row"
        >
          <div className="m-4">
            <select name="type" className="bg-white w-full h-10 px-4 border-2 rounded-md border-black">
              <option value="math" defaultChecked>
                math
              </option>
              <option value="alphabet">alphabet</option>
            </select>
          </div>
          <div className="m-4">
            <button className="bg-blue-600 text-white h-12 px-4 rounded-md shadow-md" type="submit">
              연습 테스트 시작
            </button>
          </div>
        </form>
      </div>
    );
  };

  const fetchData = async (type: Category) => {
    const general: string[] = await fetchQuestion(Category.general);
    const typeUrl: string[] = await fetchQuestion(type as Category);
    const gettedList = [...general, ...typeUrl];
    setLists(gettedList);
  };

  const renderPage = () => {
    if (!lists) {
      return <div>데이터 로딩 중입니다!</div>;
    }
    return (
      <div>
        <Quiz
          testSelected={testSelected as number}
          setTestSelected={setTestSelected}
          page={pages}
          point={point}
          setPoint={setPoint}
          setPages={setPages}
          serial={lists?.[pages] as string}
          isPractice={false}
        />
      </div>
    );
  };

  const renderFinal = () => {
    return (
      <div className="px-28 py-10">
        <div className=" bg-white p-10 m-10">
          <div className="text-4xl font-bold mb-10">결과</div>
          <div className="mb-5">
            {(lists as string[])?.length}점 중 {point} 점을 획득하였습니다
          </div>
          <div className="mb-10">{point < (lists as string[])?.length ? "시험에 합격하지 못했습니다." : "시험에 합격하셨습니다!"}</div>
          <div>
            <button
              onClick={() => {
                setType(null);
                setPages(0);
                setLists(null);
                setPoint(0);
                setTestSelected(null);
              }}
              type="button"
              className="w-full bg-blue-600 text-white h-12 rounded-md shadow-md"
            >
              새로운 연습 테스트를 시작하세요!
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (type) {
      fetchData(type as Category);
    }
  }, [type]);

  useEffect(() => {
    console.log(point);
  }, [point]);
  return (
    <div>
      <h1 className="text-4xl font-bold m-10">시험</h1>
      <div className="w-screen flex items-center justify-center">{type ? (pages >= (lists as string[])?.length ? renderFinal() : renderPage()) : renderStartForm()}</div>
    </div>
  );
};

export default QuizPage;
