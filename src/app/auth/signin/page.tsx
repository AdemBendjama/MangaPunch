import AuthProvider from "@/components/auth-provider";
import Image from "next/image";
import Link from "next/link";

function SignInPage() {
  return (
    <AuthProvider>
      <div className="h-[384px]"></div>
    </AuthProvider>
  );
}

export default SignInPage;
