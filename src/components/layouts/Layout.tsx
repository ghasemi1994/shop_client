import React from "react";
import MegaMenu from "./MegaMenu";
import MainSlider from "./Sliders/main/MainSlider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    
      <MegaMenu />
      <main className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </main>

     
    </>
  );
}
