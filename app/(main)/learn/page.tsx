import React from "react";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/quesries";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/FeedWrapper";
import { StrickyWrapper } from "@/components/StrickyWrapper";
import { HeaDer } from "./HeaDer";
import { UserProgress } from "@/components/UserProgress";
import { Unit } from "./Unit";
import { lessons, units as unitsSchema } from "@/db/schema";
import { Promo } from "@/components/Promo";
import { Quests } from "@/components/Quests";

const LearnPage = async () => {
  const userPrgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonsPercentageData = getLessonPercentage();
  const unitesData = getUnits();
  const userSubsCriptionData = getUserSubscription();

  const [
    userProgress,
    units,
    courseProgress,
    lessionPercentage,
    userSubscription,
  ] = await Promise.all([
    userPrgressData,
    unitesData,
    courseProgressData,
    lessonsPercentageData,
    userSubsCriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StrickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
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
              activeLession={
                courseProgress.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessionPercentage={lessionPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
