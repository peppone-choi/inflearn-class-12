"use client";

import { RadioProps } from "@/app/types/types";
import { changeSelected } from "@/app/util/backend";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import sleep from "@/app/util/setTimeout";

const Radio = ({ idx, serial, labelText, selected, quiz, isPractice, testSelected, setTestSelected, setIsAnswerViewed, setSelected }: RadioProps) => {
  const router = useRouter();

  const handleChange = async (quiz: string, serial: string) => {
    setSelected(serial);
    if (setTestSelected) {
      setTestSelected(idx);
      console.log(idx);
    }
    setIsAnswerViewed(false);
    return null;
  };

  return (
    <label className="flex hover:cursor-pointer my-2 mx-4 w-[calc(100%-2rem)]">
      <input
        type="radio"
        className="mr-3 hover:cursor-pointer"
        onClick={() => {
          sleep(20);
          handleChange(quiz as string, serial);
          router.refresh();
        }}
        defaultChecked={isPractice ? selected : testSelected === idx}
        name={quiz}
        id={serial}
      />
      <p>{labelText}</p>
    </label>
  );
};

export default Radio;
