import { FeedWrapper } from "@/components/FeedWrapper";
import { StrickyWrapper } from "@/components/StrickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { getUserProgress, getUserSubscription } from "@/db/quesries";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { Items } from "./Items";
import { Promo } from "@/components/Promo";
import { Quests } from "@/components/Quests";

const ShopPage = async () => {
  const userPrhressData = getUserProgress();
  const userSubsCriptionData = getUserSubscription();

  const [userProgress, useSubsCription] = await Promise.all([
    userPrhressData,
    userSubsCriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!useSubsCription?.isActive;

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
        <div className="w-full flex  flex-col items-center">
          <Image src="/shop.svg" alt="Shop" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSunscription={!!useSubsCription?.isActive}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
