"use client";
import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button
        type="submit"
        variant="gradient"
        fullWidth
        className="w-auto"
        onClick={() => signIn("google", { callbackUrl: "/home" })}
      >
        Sign In with Google
      </Button>
    </div>
  );
}
