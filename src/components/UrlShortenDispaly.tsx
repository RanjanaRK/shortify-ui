"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, QrCode } from "lucide-react";
import GenerateQr from "./GenerateQr";
import UrlShortenForm from "./UrlShortenForm";

const UrlShortenDispaly = () => {
  return (
    <>
      <div className="">
        <Tabs
          defaultValue="urlShorten"
          // className="w-full max-w-md rounded-lg bg-white"
          className="h-80 w-full rounded-lg bg-white md:w-100 lg:w-140"
        >
          <TabsList className="w-full">
            <TabsTrigger value="urlShorten" className="">
              <Link /> Shorten a Link
            </TabsTrigger>
            <TabsTrigger value="qrGenerate">
              <QrCode /> Generate QR Code
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="urlShorten"
            className="animate-in fade-in-0 slide-in-from-left-2 p-6 duration-300"
          >
            <UrlShortenForm />
          </TabsContent>
          <TabsContent
            value="qrGenerate"
            className="animate-in fade-in-0 slide-in-from-left-2 p-6 duration-300"
          >
            <GenerateQr />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default UrlShortenDispaly;
