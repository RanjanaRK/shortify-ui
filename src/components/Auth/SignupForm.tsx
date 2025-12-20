"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useSignUp from "@/hooks/auth/useSignUp";
import { SignUpFormSchemaTypes } from "@/lib/types";
import { signUpFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const form = useForm<SignUpFormSchemaTypes>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSumbit = async (signUpData: SignUpFormSchemaTypes) => {
    console.log(signUpData);
    const { message, success, data } = await useSignUp(signUpData);
    console.log(message);
    console.log(success);
    console.log(data);
    if (success) {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <div className="w-130 space-y-10 rounded-lg bg-white p-6">
        <div className="space-y-2.5">
          <div className="text-4xl font-bold text-gray-800">Sign Up</div>
          <div className="text-xl text-gray-800">
            Already have an account?{" "}
            <span className="font-bold text-sky-700 hover:underline">
              Log in
            </span>
          </div>
        </div>
        <hr />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSumbit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        {...field}
                      />

                      <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {show ? <Eye /> : <EyeClosed />}
                      </button>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SignupForm;
