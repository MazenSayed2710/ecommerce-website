"use client";
import { facebookSignIn, googleSignIn, handleSignIn } from "@/app/_lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SignInForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const result = await handleSignIn({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    console.log(result);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Successfully signed in");
      router.push("/");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
        <div className="flex justify-center mb-6">
          <span className="text-3xl text-indigo-600">~</span>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              required
              minLength={8}
            />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Sign in
          </button>
        </form>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex gap-4">
          <button
            onClick={googleSignIn}
            className="flex items-center justify-center w-1/2 p-2 border rounded-md hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" /> Google
          </button>
          <button
            className="flex items-center justify-center w-1/2 p-2 border rounded-md hover:bg-gray-100"
            onClick={facebookSignIn}
          >
            <FaFacebook className="mr-2" /> Facebook
          </button>
        </div>
        <div className="flex items-center  mt-4">
          <p className="mr-2 text-gray-500">Don’t have an account yet?</p>
          <Link href="/signUp" className="text-indigo-600 text-base">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
