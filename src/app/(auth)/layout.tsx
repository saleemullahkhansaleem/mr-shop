import { ThemeToggle } from "@/components/component/ThemeToggle";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b shadow-sm sticky top-0 z-40">
        <div className="container px-1 sm:px-4 md:px-6 flex items-center justify-between h-12">
          <Link href="/" className="mr-4 md:mr-6" prefetch={false}>
            <h1 className="uppercase font-extrabold text-xl sm:text-2xl">
              Mr Shop
            </h1>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center bg-background p-4">
        {children}
      </div>
    </div>
  );
}
