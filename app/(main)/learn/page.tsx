import { getUserProgress } from "@/db/quesries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/FeedWrapper";
import { StrickyWrapper } from "@/components/StrickyWrapper";
import React from "react";
import { HeaDer } from "./HeaDer";
import { UserProgress } from "@/components/UserProgress";

const LearnPage = async () => {
  const userPrgressData = getUserProgress();

  const [userProgress] = await Promise.all([userPrgressData]);

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
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
