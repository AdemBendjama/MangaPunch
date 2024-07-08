import AuthProvider from "@/components/auth-provider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function SignInPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return <AuthProvider type="signin" />;
}

export default SignInPage;
