import { Copy, LinkIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { urlFormSchema } from "@/lib/zodSchema";
import { UrlFormSchemaType } from "@/lib/types";

const UrlShortenForm = () => {
  const form = useForm<UrlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  const handleSumbit = async (urlData: UrlFormSchemaType) => {
    console.log(urlData);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSumbit)} className="space-y-4">
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

          <Button type="submit" className="w-full bg-green-800">
            Shorten URL
          </Button>
        </form>
      </Form>

      {/* {shortUrl && ( */}
      <div className="mt-6 space-y-2">
        <label className="text-sm font-medium">Short URL</label>
        <div className="flex items-center gap-2">
          <Input
            //   value={shortUrl}
            readOnly
          />
          <Button
            type="button"
            variant="outline"
            // onClick={handleCopy}
            className="flex items-center gap-2"
          >
            <Copy className="h-4 w-4" />
            {/* {copied ? "Copied" : "Copy"} */}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Button>Visit URL</Button>
        <Button>Share</Button>
        <Button>Copy</Button>
      </div>
      {/* )} */}
    </>
  );
};

export default UrlShortenForm;
