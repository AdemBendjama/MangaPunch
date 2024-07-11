import AuthProvider from "@/components/auth-provider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function VerifyEmail() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }
  return <AuthProvider type="verify_email" />;
}

export default VerifyEmail;
