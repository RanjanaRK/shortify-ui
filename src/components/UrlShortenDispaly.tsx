"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UrlShortenForm from "./UrlShortenForm";
import { Link, QrCode } from "lucide-react";

const UrlShortenDispaly = () => {
  return (
    <>
      <div className="">
        <Tabs defaultValue="account" className="h-85 w-115 rounded-lg bg-white">
          <TabsList className="w-full">
            <TabsTrigger value="account" className="">
              <Link /> Shorten a Link
            </TabsTrigger>
            <TabsTrigger value="password">
              <QrCode /> Generate QR Code
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="animate-in fade-in-0 slide-in-from-left-2 p-6 duration-300"
          >
            <UrlShortenForm />
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
