"use client";
import React, { useState } from "react";
import { challengeOptions, challenges } from "@/db/schema";
import { Headerr } from "./Headerr";
import { QuestionBubble } from "./QuestionBubble";
import { Challangee } from "./Challange";

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
  const [challenges, setChallenges] = useState(initialLessonChllenges);

  const [activeIndex, setActiveIndex] = useState(() => {
    const index = challenges.findIndex((chllange) => !chllange.completed);
    return index === -1 ? 0 : index;
  });

  const challenge = challenges[activeIndex];
  const options = challenge?.chllangeOptions ?? [];

  const title =
    challenge.type == "ASSIST"
      ? "Select the correct answer"
      : challenge.question;

  return (
    <>
      <Headerr
        hearts={hearts}
        percentage={percentage}
        hasActiveSubsCription={!!userSubscriptions?.isActive}
      />
      <div className="flex-1">
        <div className="min-h-screen flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div className="">
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challangee
                options={options}
                onSelect={() => {}}
                status="unanswered"
                selectedOption={undefined}
                disabled={false}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
