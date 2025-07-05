"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const authenticationAction = async (cb: () => unknown) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.session || !session?.user) {
      redirect("/signin");
    }

    cb();
  } catch (error) {
    console.error(`Something wrong happened ${error}`);
  }
};
