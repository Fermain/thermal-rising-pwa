import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function AuthButton() {
  const { data: sessionData } = useSession();

  return (
    <>
      {!sessionData ? (
        <GoogleButton onClick={() => void signIn("google")} />
      ) : (
        <button
          className="border-r-4 border-red-500 bg-zinc-100 p-2"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      )}
    </>
  );
}
