import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <div
      onClick={() => signOut()}
      className="border border-violet-900 p-2 xs:pl-4 xs:pr-4 rounded-lg text-lg cursor-pointer hover:text-violet-900"
    >
      Logout
    </div>
  );
}