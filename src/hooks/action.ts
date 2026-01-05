"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const urlRefetchAction = async () => {
  //   revalidateTag(`allurls`, `max`);

  revalidatePath(`/`);
};
export const loginAction = async () => {
  revalidatePath(`/`);

  revalidateTag(`currentUser`, `max`);
  //   revalidateTag("currentUser", "default");
};
