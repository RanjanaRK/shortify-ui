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

const UrlShortenForm = () => {
  const form = useForm({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   originalUrl: "",
    // },
  });

  return (
    <>
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            //   control={form.control}
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
      {/* )} */}
    </>
  );
};

export default UrlShortenForm;
