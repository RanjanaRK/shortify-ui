import useUrlShorten from "@/hooks/url/useUrlShorten";
import { UrlFormSchemaType } from "@/lib/types";
import { urlFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Copy, CopyCheck, ExternalLink, LinkIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const UrlShortenForm = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const form = useForm<UrlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  const handleSumbit = async (urlData: UrlFormSchemaType) => {
    console.log(urlData);
    const { message, success, data } = await useUrlShorten(urlData);

    setShortUrl(data!?.shortUrl);

    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleCopy = async () => {
    if (!shortUrl) return;

    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => setCopied(false), 10000);
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

      {shortUrl && (
        <>
          <div className="mt-6">
            <label className="text-sm font-medium">Short URL</label>
            <div className="flex items-center gap-2">
              <Input value={shortUrl} readOnly />

              <Tooltip>
                <TooltipTrigger
                  onClick={() => navigator.clipboard.writeText(shortUrl)}
                  asChild
                >
                  <Button onClick={handleCopy} variant={"outline"}>
                    {copied ? (
                      <CopyCheck className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Tooltip>
              <TooltipTrigger
                onClick={() => navigator.clipboard.writeText(shortUrl)}
                className="text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-sky-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <Link
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit URL</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                onClick={() => navigator.clipboard.writeText(shortUrl)}
                className="text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-sky-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                Copy
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </>
      )}
    </>
  );
};

export default UrlShortenForm;
