"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UrlShortenDispaly = () => {
  return (
    <>
      <div className="border">
        <Tabs defaultValue="account" className="w-115">
          <TabsList className="w-full">
            <TabsTrigger value="account" className="">
              Account
            </TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="animate-in fade-in-0 slide-in-from-left-2 duration-300"
          >
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            value="password"
            className="animate-in fade-in-0 slide-in-from-left-2 duration-300"
          >
            Change your password here.
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default UrlShortenDispaly;
