export type HeaderButtonProp = {
  text: string;
  to: string;
};

export interface QuizProp {
  serial: string;
  isPractice: boolean;
  page: number | null;
  setPages: React.Dispatch<React.SetStateAction<number>> | null;
  point: number | null;
  testSelected: number;
  setPoint: React.Dispatch<React.SetStateAction<number>> | null;
  setTestSelected: React.Dispatch<React.SetStateAction<number | null>> | null;
}

export interface QuizType {
  serial: string;
  options: string[];
  question: string;
  answer: string;
  selected: string | null;
}

export interface OptionType {
  id: string;
  text: string;
  answer: boolean;
  selected: boolean;
  quiz: string;
}

export interface OptionProps {
  serial: string;
  answer: boolean;
  selected: boolean;
  isAnswerViewed: boolean;
  isPractice: boolean;
  testSelected: number;
  idx: number;
  setTestSelected: React.Dispatch<React.SetStateAction<number | null>> | null;
  setIsAnswerViewed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCurrentAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface RadioProps {
  serial: string;
  labelText: string;
  selected: boolean;
  quiz: string;
  answer: boolean;
  isPractice: boolean;
  testSelected: number;
  idx: number;
  setTestSelected: React.Dispatch<React.SetStateAction<number | null>> | null;
  setIsAnswerViewed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCurrentAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}
