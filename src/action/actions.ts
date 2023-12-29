"use server";

import { revalidatePath, revalidateTag } from "next/cache";
export default async function revalidateProfileUser(username: string) {
  return revalidatePath(`/user/${username}`);
}
