"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const urlRefetchAction = async () => {
  revalidatePath(`/`);
};
export const loginAction = async () => {
  revalidatePath(`/`);

  revalidateTag(`currentUser`, `max`);
};
