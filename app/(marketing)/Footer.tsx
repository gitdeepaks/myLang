import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block w-full h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant="ghost" className="w-full">
          <Image
            src="hr.svg"
            alt="logo"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Andorra
        </Button>
        <Button variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            alt="Isreal"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Isreal
        </Button>

        <Button variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japan"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Japan
        </Button>
        <Button variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Zambia"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Zambia
        </Button>
        <Button variant="ghost" className="w-full">
          <Image
            src="/hr.svg"
            alt="Croatia"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Colombia
        </Button>
        <Button variant="ghost" className="w-full">
          <Image
            src="/vercel.svg"
            alt="Germany"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Germany
        </Button>
      </div>
    </footer>
  );
};
