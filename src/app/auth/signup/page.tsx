import AuthProvider from "@/components/auth-provider";
import Image from "next/image";

function SignUpPage() {
  return (
    <AuthProvider>
      <div className="h-[384px]"></div>
    </AuthProvider>
  );
}

export default SignUpPage;
