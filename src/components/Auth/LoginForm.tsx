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
import useLogin from "@/hooks/auth/useLogin";
import { LoginFormSchemaType } from "@/lib/types";
import { loginFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSumbit = async (loginData: LoginFormSchemaType) => {
    const { message, success } = await useLogin(loginData);
    if (success) {
      toast.success(message);
      router.push("/");
    } else {
      toast.error(message);
    }
  };

  return (
    <>
      <div className="w-130 space-y-10 rounded-lg bg-white p-6">
        <div className="space-y-2.5">
          <div className="text-4xl font-bold text-gray-800">Log In</div>
          <div className="text-xl text-gray-800">
            Don't have an account?{" "}
            <span className="font-bold text-sky-700 hover:underline">
              Sign Up
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
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
