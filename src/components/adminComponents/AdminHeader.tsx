import { MenuIcon, Package2Icon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ThemeToggle } from "../component/ThemeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import SideNav from "./SideNav";

export default function AdminHeader() {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-2 md:gap-4 border-b bg-muted/40 px-2 md:px-6">
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="ghost" size="icon" className="z-20 rounded-full">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 bg-background p-4 overflow-y-scroll"
        >
          <SheetTitle className="mb-2">Mr Shop</SheetTitle>
          <SideNav withSheetClose />
        </SheetContent>
      </Sheet>
      <div className="sm:flex-1">
        <h1 className="font-semibold text-lg">Orders</h1>
      </div>
      <div className="flex flex-1 items-center md:ml-auto gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
                style={{ aspectRatio: "32/32", objectFit: "cover" }}
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/admin">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
