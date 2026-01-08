"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UrlFormSchemaType } from "@/lib/types";
import { urlFormSchema } from "@/lib/zodSchema";
import { LinkIcon, LoaderIcon } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import { generateQrCode } from "@/lib/api/url.server";
import Image from "next/image";
import { Tooltip, TooltipTrigger } from "./ui/tooltip";

const GenerateQr = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  const form = useForm<UrlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  const onSubmit = async (values: UrlFormSchemaType) => {
    try {
      const { data, message, success } = await generateQrCode(
        values.originalUrl,
      );
      console.log(data);

      if (success) {
        toast.success(message);
        setData(data);
        // await urlRefetchAction();
      }
      if (!success) {
        toast.error(message);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="">
        {data ? (
          <div className="space-y-3 text-center">
            <Image
              src={data.qr}
              alt="QR Code"
              height={40}
              width={40}
              className="mx-auto h-40 w-40"
            />

            <p className="text-sm break-all text-gray-600">{data.shortUrl}</p>

            <a
              href={data.qr}
              download="qr-code.png"
              className="hover:bg-primary/30 inline-block rounded-md border px-4 py-2 text-sm transition-all"
            >
              Download QR
            </a>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="originalUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long URL</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <LinkIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          placeholder="https://example.com/very-long-url"
                          className="pl-9"
                          {...field}
                          required
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-green-800"
              >
                {form.formState.isSubmitting ? <LoaderIcon /> : " Generate QR"}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </>
  );
};

export default GenerateQr;
