"use client";

import React from "react";
import { courses, userProgress } from "@/db/schema";
import { Card } from "./Card";
import { useRouter } from "next/navigation";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type ListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCoursesId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCoursesId }: ListProps) => {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();

  const handleClick = (id: number) => {
    if (pending) return;
    if (id === activeCoursesId) return router.push(`/learn`);
    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Failed to start course"));
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title!}
          imageScr={course.imageSrc}
          onClick={handleClick}
          disabled={pending}
          active={course.id === activeCoursesId}
        />
      ))}
    </div>
  );
};
