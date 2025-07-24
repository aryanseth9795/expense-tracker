'use client';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"; // Adjust the import path as necessary

const Login = () => {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <div className="flex flex-col h-[40vh] w-[30vw] items-center justify-center gap-4 bg-white rounded-lg shadow-lg p-6 border shadow-gray-300">
        <h2 className="text-2xl font-bold">Login</h2>

        <Button className="w-full" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
