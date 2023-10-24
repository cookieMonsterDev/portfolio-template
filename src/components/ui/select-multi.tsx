"use client";
import { useState } from "react";
import { Delete, Plus } from "lucide-react";
import { Button } from "./button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface SelectMultiProps {
  list: string[];
  onChange: (value: string[]) => void;
}

const selectVariants = cva(
  "flex items-center w-full rounded-md border border-slate-200 bg-white px-3 py-2 ring-offset-white text-sm placeholder:text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400",
  {
    variants: {
      variant: {
        default: "",
        focus:
          "outline outline-2 outline-offset-2",
        disabled: "sda",
      },
      defaultVariants: {
        variant: "default",
      },
    },
  }
);

export const SelectMulti: React.FC<SelectMultiProps> = ({ list, onChange }) => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  const onRemoveElement = (el: string) => {
    onChange(list.filter((e) => e !== el));
  };

  const onAddElement = () => {
    if (!text) return;

    onChange([...list, text]);
    setText("");
    setFocus(true)
  };

  return (
    <div
      className={cn(selectVariants({ variant: !focus ? "default" : "focus" }))}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className="flex items-center flex-1 flex-wrap relative overflow-hidden box-border gap-2">
        {list.map((e, i) => (
          <span
            key={e}
            className="max-w-full max-h-6 bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950 rounded-xl px-4 flex items-center justify-between gap-2"
          >
            <p className="overflow-hidden text-ellipsis flex-1">{e}</p>
            <Delete
              className="min-h-6 min-w-6 cursor-pointer"
              onClick={() => onRemoveElement(e)}
            />
          </span>
        ))}
        <div className="box-border flex-auto">
          <input
            className="outline-none min-w-[2px] bg-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="w-5 h-5"
        onClick={onAddElement}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};
