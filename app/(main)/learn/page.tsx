import { getUnits, getUserProgress } from "@/db/quesries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/FeedWrapper";
import { StrickyWrapper } from "@/components/StrickyWrapper";
import React from "react";
import { HeaDer } from "./HeaDer";
import { UserProgress } from "@/components/UserProgress";
import { Unit } from "./Unit";

const LearnPage = async () => {
  const userPrgressData = getUserProgress();
  const unitesData = getUnits();

  const [userProgress, units] = await Promise.all([
    userPrgressData,
    unitesData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StrickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSunscription={false}
        />
      </StrickyWrapper>
      <FeedWrapper>
        <HeaDer title={userProgress.activeCourse.title!} />
        {units.map((unit) => (
          <div className="mb-10" key={unit.id}>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLession={undefined}
              activeLessionPercentage={0}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
