"use client";
import { challengeOptions, challenges } from "@/db/schema";
import React, { useState } from "react";
import { Headerr } from "./Headerr";

type QuizProps = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChllenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    chllangeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscriptions: any; //TODO:Replace with subscription DB type
};

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChllenges,
  userSubscriptions,
}: QuizProps) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <Headerr
        hearts={hearts}
        percentage={percentage}
        hasActiveSubsCription={!!userSubscriptions?.isActive}
      />
    </>
  );
};
