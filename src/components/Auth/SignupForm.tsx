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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import useSignUp from "@/lib/api/auth/signUp";
import { SignUpFormSchemaTypes } from "@/lib/types";
import { signUpFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    const { message, success } = await useSignUp(signUpData);

    if (success) {
      toast.success(message);
      router.push("/auth/login");
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      {/* <div className="flex min-h-screen items-center justify-center"> */}
      <Card className="w-full sm:w-105">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Sign Up</CardTitle>

          <div>
            Already have an account?{" "}
            <span className="cursor-pointer font-bold text-sky-700 hover:underline">
              Log In
            </span>
          </div>
        </CardHeader>

        <CardContent>
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
        </CardContent>
      </Card>
      {/* </div> */}
    </>
  );
};

export default SignupForm;
