import AuthProvider from "@/components/auth-provider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function SignUpPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return <AuthProvider type="signup" />;
}

export default SignUpPage;
