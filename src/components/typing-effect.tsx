"use client";
import { cn } from "@/lib/utils";
import { useEffect, useReducer } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number;
};

type State = {
  length: number;
  animationType: "forward" | "backward";
  displayText: string;
  index: number;
};

type Action =
  | { type: "inc" }
  | { type: "dec" }
  | { type: "chageAnimation"; payload: State["animationType"] }
  | { type: "chageDisplayText"; payload: State["displayText"] };

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
}) => {
  const initialState: State = {
    length: text.length,
    animationType: "forward",
    displayText: "",
    index: 0,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "chageAnimation": {
        return { ...state, animationType: action.payload };
      }
      case "inc": {
        return { ...state, index: state.index + 1 };
      }
      case "dec": {
        return { ...state, index: state.index - 1 };
      }
      case "chageDisplayText": {
        return { ...state, displayText: action.payload };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let forwardTyping: ReturnType<typeof setInterval>;
    let backwardTyping: ReturnType<typeof setInterval>;

    if (state.animationType === "forward") {
      forwardTyping = setInterval(() => {
        if (state.index > state.length) {
          clearInterval(forwardTyping);
          // setTimeout(
          //   () => dispatch({ type: "chageAnimation", payload: "backward" }),
          //   3000
          // );
          return;
        }
        const newDisplayText = text.slice(0, state.index);

        dispatch({ type: "chageDisplayText", payload: newDisplayText });
        dispatch({ type: "inc" });
      }, speed);
    }

    if (state.animationType === "backward") {
      backwardTyping = setInterval(() => {
        if (state.index <= 0) {
          clearTimeout(backwardTyping);
          // setTimeout(
          //   () => dispatch({ type: "chageAnimation", payload: "forward" }),
          //   3000
          // );
          return;
        }

        console.log(state.index)

        const newDisplayText = text.slice(0, state.index);

        dispatch({ type: "chageDisplayText", payload: newDisplayText });
        dispatch({ type: "dec" });
      }, speed);
    }

    return () => {
      if (state.animationType === "forward") {
        clearInterval(forwardTyping);
      }
      if (state.animationType === "backward") {
        clearInterval(backwardTyping);
      }
    };
  }, [text, speed, state.index, state.animationType]);

  return (
    <p
      className={cn(
        'w-fit relative after:content-[""] after:absolute after:-right-3 after:h-full after:w-2 after:bg-primary'
      )}
    >
      {state.displayText}
    </p>
  );
};

//after:animate-pulse after:animate-infinite after:animate-duration-[1500ms] after:animate-ease-in-out
