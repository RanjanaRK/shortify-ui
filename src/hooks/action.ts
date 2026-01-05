"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const urlRefetchAction = async () => {
  revalidateTag("allUrls", "default");

  revalidatePath(`/`);
};
