import React from "react";
import MegaMenu from "./MegaMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <MegaMenu />

      <main className="w-full h-screen">
        {children}
      </main>


    </>
  );
}
