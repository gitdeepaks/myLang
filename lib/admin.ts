import { auth } from "@clerk/nextjs";

const allowedId = [process.env.ADMIN_USER_ID];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }
  return allowedId.indexOf(userId) !== -1;
};
