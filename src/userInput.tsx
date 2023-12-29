import { createContext, useCallback, useState } from 'react';
import parseMeridianPoint from './parseMeridianPoint';
import Meridians from './Meridians';

type points<T> = {
  Ying_Well: T;
  Ying_Spring: T;
  Shu_Stream: T;
  Jing_River: T;
  He_Sea: T;
  Horary: T;
  Tonification: T;
  Sedation: T;
  Source: T;
  Luo_Connecting: T;
  Xi_Cleft: T;
  Front_Mu: T;
  Back_Shu: T;
  [key: string]: T;
};

export enum inputState {
  INCORRECT,
  CORRECT,
  UNANSWERED,
}

function buildPointSet<T>(defaultValue: T) {
  return {
    Ying_Well: defaultValue,
    Ying_Spring: defaultValue,
    Shu_Stream: defaultValue,
    Jing_River: defaultValue,
    He_Sea: defaultValue,
    Horary: defaultValue,
    Tonification: defaultValue,
    Sedation: defaultValue,
    Source: defaultValue,
    Luo_Connecting: defaultValue,
    Xi_Cleft: defaultValue,
    Front_Mu: defaultValue,
    Back_Shu: defaultValue,
  } as points<T>;
}

const UserInputContext = createContext<
  | {
      InputValues: points<string>;
      AnswerStates: points<inputState>;
      setPoint: (key: string, value: string) => void;
      checkAnswers: () => void;
    }
  | undefined
>(undefined);

export function UserInputProvider({
  children,
  meridian,
}: {
  children: JSX.Element[];
  meridian: string;
}) {
  const [InputValues, setInputValues] = useState(buildPointSet(''));
  const [AnswerStates, setAnswerStates] = useState(
    buildPointSet(inputState.UNANSWERED)
  );

  const setPoint = (key: string, value: string) => {
    setInputValues((val) => {
      val[key] = parseMeridianPoint(value, meridian);
      console.log(`${key} = ${parseMeridianPoint(value, meridian)}`);
      return { ...val };
    });
  };

  const checkAnswers = useCallback(() => {
    setAnswerStates((states) => {
      for (const point in InputValues)
        states[point] =
          InputValues[point] === Meridians[meridian][point]
            ? inputState.CORRECT
            : inputState.INCORRECT;
      return { ...states };
    });
  }, [InputValues, setAnswerStates, meridian]);

  return (
    <UserInputContext.Provider
      value={{ InputValues, AnswerStates, setPoint, checkAnswers }}
    >
      {children}
    </UserInputContext.Provider>
  );
}

export default UserInputContext;
