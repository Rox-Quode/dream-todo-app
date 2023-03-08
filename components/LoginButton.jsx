import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export function LoginButton() {
    const { data: session } = useSession();
    if (session){
        return (
            <div className="flex flex-col gap-y-4">
                <p>Welcome back: {session.user.email}</p>
                <Link
                href="/dashboard"
                className="border border-violet-900 p-4 rounded-lg text-lg cursor-pointer hover:text-violet-900"
                >
                View Todos
                </Link>
            </div>
        );
    }
    return(
        <div
            onClick={() => signIn()}
            className="border border-violet-900 p-4 rounded-lg text-lg cursor-pointer hover:text-violet-700"
        >
            Sign In With Magic Link
        </div>
    );
}