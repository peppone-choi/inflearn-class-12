import { HeaderButtonProp } from "@/app/types/types";
import Link from "next/link";
import React from "react";

const HeaderButton = ({ text, to }: HeaderButtonProp) => {
  return (
    <div className="text-white ">
      <Link href={to} className="">
        <button className="h-10 mx-3 px-6 rounded-md bg-red-900 items-center shadow-md">
          <span>{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default HeaderButton;
