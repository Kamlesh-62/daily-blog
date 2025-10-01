"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/libs/supabase/server";
import {
  OAuthResponse,
} from "@supabase/supabase-js";

// types
type LoginValues = {
  email: string;
  password: string;
};

// service
export async function loginWithEmailAndPassword(
  payload: LoginValues
): Promise<{ success: boolean; message?: string }> {
  const supabase = await createClient();
  const response = await supabase.auth.signInWithPassword(payload);

  if (response.error) {
    if (response.error.code === "invalid_credentials") {
      const { data: providers, error: rpcError } = await supabase.rpc(
        "get_providers_for_email",
        { p_email: payload?.email }
      );

      if (rpcError) {
        return { success: false, message: rpcError.message };
      }

      if (providers?.includes("email")) {
        return {
          success: false,
          message:
            "Invalid Password. Please check your password and try again.",
        };
      } else if (providers?.includes("google")) {
        return {
          success: false,
          message:
            "This account was created with Google. Please sign in with Google.",
        };
      }
    }
    return { success: false, message: response.error.message };
  }

  return { success: true };
}

export async function signupWithEmailAndPassword(
  payload: LoginValues
): Promise<{ success: boolean; message?: string }> {
  const supabase = await createClient();
  const response = await supabase.auth.signUp(payload);

  if (response.error) {
    if (response.error.code === "user_already_exists") {
      const { data: providers, error: rpcError } = await supabase.rpc(
        "get_providers_for_email",
        { p_email: payload?.email }
      );

      if (rpcError) {
        return { success: false, message: rpcError.message };
      }

      if (providers && providers.includes("email")) {
        return {
          success: false,
          message:
            "This email is already registered with email. Please sign in with email.",
        };
      } else if (providers && providers.includes("google")) {
        return {
          success: false,
          message:
            "This account was created with Google. Please sign in with Google.",
        };
      }
    }
    return { success: false, message: response.error.message };
  }
  return { success: true };
}

export async function HandleSignOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function handleSignInWithGoogle(): Promise<OAuthResponse> {
  const supabase = await createClient();

  const response = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: process.env.NEXT_PUBLIC_AUTH_CALLBACK_BASE_URL,
    },
  });

  if (response.error) {
    console.error("Google sign-in error:", response.error.message);
    throw new Error(response.error.message);
  }

  return response;
}
