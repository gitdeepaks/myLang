import { FeedWrapper } from "@/components/FeedWrapper";
import { StrickyWrapper } from "@/components/StrickyWrapper";
import React from "react";
import { HeaDer } from "./HeaDer";
import { UserProgress } from "@/components/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StrickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/ES - Spain.svg" }}
          hearts={5}
          points={100}
          hasActiveSunscription={false}
        />
      </StrickyWrapper>
      <FeedWrapper>
        <HeaDer title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
