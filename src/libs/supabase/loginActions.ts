"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";
import { AuthError, OAuthResponse } from "@supabase/supabase-js";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
export async function HandleSignOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function handleSignInWithGoogle(): Promise<OAuthResponse | null> {
  try {
    const supabase = await createClient();

    console.log(
      process.env.NEXT_PUBLIC_AUTH_CALLBACK_BASE_URL,
      "process.env.NEXT_PUBLIC_AUTH_CALLBACK_BASE_URL"
    );
    const response = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_CALLBACK_BASE_URL,
      },
    });

    if (response.error) {
      console.error("Google sign-in error:", response?.error.message);
      throw new Error(response?.error.message);
    }

    return response;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Unexpected error during Google sign-in:", err.message);
      throw err;
    }
    console.error("Unknown error during Google sign-in:", err);
    throw new Error("Unknown error during Google sign-in");
  }
}
