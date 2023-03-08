import { useSession, signIn } from "next-auth/react";

export function LoginButton() {
    const { data: session } = useSession();
    if (session){
        return <>View To-dos</>;
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