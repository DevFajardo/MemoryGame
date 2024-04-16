"use client";
import {HomeProvider } from "@/app/components/HomeContext";
import HomeContent from "@/app/components/Home";


export default function Home() {
  return (
    <main className="h-screen flex justify-center">
      <HomeProvider>
        {<HomeContent/>}
      </HomeProvider>
    </main>
  );
}
