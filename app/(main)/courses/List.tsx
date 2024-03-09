"use client";

import { courses } from "@/db/schema";
import React from "react";
import { Card } from "./Card";

type ListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCoursesId: number;
};

export const List = ({ courses, activeCoursesId }: ListProps) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title!}
          imageScr={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCoursesId}
        />
      ))}
    </div>
  );
};
