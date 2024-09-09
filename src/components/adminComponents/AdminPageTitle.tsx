"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";

export default function AdminPageTitle() {
  const pathName = usePathname();
  const title =
    pathName.slice(6).replace("/", "").replace("-", " ") || "Dashboard"; // Clean up path

  return (
    <>
      <Head>
        <title>
          {title.charAt(0).toUpperCase() + title.slice(1)} | Dashboard
        </title>
      </Head>
      <h1 className="font-semibold text-lg">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h1>
    </>
  );
}
