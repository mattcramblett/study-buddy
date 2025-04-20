"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInWithGoogleButton() {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google");
    router.push("/");
  }

  return (
    <div
      className="w-full max-w-xs rounded-lg p-4 shadow-md"
      style={{ backgroundColor: "var(--card)" }}
    >
      <button
        onClick={handleSignIn}
        className="flex w-full items-center justify-center rounded-md px-4 py-2 focus:outline-none focus:ring-2"
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
          outlineColor: "var(--primary)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--primary-foreground)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--primary)")
        }
      >
        <svg
          className="mr-2 h-5 w-5"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8c0-17.4-1.5-34.1-4.3-50.4H249v95.5h134.6c-5.8 31.3-23.3 57.8-49.7 75.6v62h80.4c47-43.3 74-107 74-182.7z"
          />
          <path
            fill="currentColor"
            d="M249 492c67.2 0 123.7-22.3 164.9-60.7l-80.4-62c-22.3 15-50.8 23.9-84.5 23.9-64.9 0-120-43.8-139.7-102.7H28.1v64.4C69.9 445.7 153.6 492 249 492z"
          />
          <path
            fill="currentColor"
            d="M109.3 294.5c-4.8-14.3-7.5-29.6-7.5-45.2s2.7-30.9 7.5-45.2v-64.4H28.1c-15.3 30.6-24 64.9-24 101.6s8.7 71 24 101.6l81.2-64.4z"
          />
          <path
            fill="currentColor"
            d="M249 97.7c35.7 0 67.7 12.3 92.9 36.4l69.7-69.7C372.3 25.6 312.2 0 249 0 153.6 0 69.9 46.3 28.1 117.3l81.2 64.4C129 141.5 184.1 97.7 249 97.7z"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
