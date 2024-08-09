import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  LogoutIcon,
  OrdersIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@/components/icons";
import CategoriesNavbar from "./CategoriesNavbar";
import DrawerMenu from "./DrawerMenu";
import { ModeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const isLoggedIn = false;

export default function Header() {
  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-40">
      <div className="container px-1 sm:px-4 md:px-6 flex items-center h-12 md:h-14">
        <div className="block xl:hidden mr-2">
          <DrawerMenu />
        </div>
        <div className="flex items-center flex-1">
          <Link href="/" className="mr-4 md:mr-6" prefetch={false}>
            <h1 className="uppercase font-extrabold text-xl sm:text-2xl">
              Mr Shop
            </h1>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full bg-muted pl-10 pr-4 rounded-md h-auto"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark">
              <SearchIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <nav className="ml-auto hidden md:flex items-center gap-4 pl-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="ml-0 sm:ml-4 md:ml-6 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            title="Cart"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <ProfileMenu />
          <ModeToggle />
        </div>
      </div>
      <CategoriesNavbar />
    </header>
  );
}

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserIcon className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem>
              <UserIcon className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <OrdersIcon className="h-4 w-4 mr-2" />
              Orders
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutIcon className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <div className="text-center">
            <Button asChild size="sm">
              <Link href="/login" prefetch={false}>
                Login
              </Link>
            </Button>{" "}
            <br />
            <p className="text-center text-sm text-muted-foreground p-2">
              New customer{" "}
              <Link
                href="/register"
                className="underline hover:text-foreground"
                prefetch={false}
              >
                start here
              </Link>
            </p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
