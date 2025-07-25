'use client';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"; // Adjust the import path as necessary
import Image from "next/image";

const Login = () => {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="flex flex-col h-[40%] w-[80%] md:h-[40vh] md:w-[30vw] items-center justify-center gap-4 bg-white rounded-lg shadow-lg p-6 border shadow-gray-300">
        <h2 className="text-2xl font-bold">Login</h2>

        <Button className="w-full py-8 px-5" onClick={handleGoogleLogin}>
          Sign in with Google 
        <Image src="/google.png" alt="Google Logo" width={50} height={50} />
        </Button>

      </div>
    </div>
  );
};

export default Login;
