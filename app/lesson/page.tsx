import React from "react";
import { getLesson, getUserProgress } from "@/db/quesries";
import { redirect } from "next/navigation";
import { Quiz } from "./Quiz";

const LessonPage = async () => {
  const lessonData = await getLesson();
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;
  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChllenges={lesson.challenges.map((challenge) => ({
        ...challenge,
        chllangeOptions: [],
      }))}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscriptions={null}
    />
  );
};

export default LessonPage;
