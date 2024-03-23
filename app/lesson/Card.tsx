import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import React from "react";
type CardProps = {
  id: number;
  imageScr: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  status: "correct" | "incorrect" | "unanswered";
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  id,
  imageScr,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: CardProps) => {
  return (
    <div
      onClick={() => {}}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active::border-b-2"
      )}
    >
      Card
    </div>
  );
};
