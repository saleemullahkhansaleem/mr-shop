import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  LoginIcon,
  LogoutIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  UserPlusIcon,
} from "@/components/icons";
import CategoriesNavbar from "./CategoriesNavbar";
import DrawerMenu from "./DrawerMenu";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const isLoggedIn = true;

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
            <span className="sr-only">Mr Shop</span>
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
          <ThemeToggle />
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
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer" prefetch={false}>
                <UserIcon className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/logout" className="cursor-pointer" prefetch={false}>
                <LogoutIcon className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/login" className="cursor-pointer" prefetch={false}>
                <LoginIcon className="h-4 w-4 mr-2" /> Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/register"
                className="cursor-pointer"
                prefetch={false}
              >
                <UserPlusIcon className="h-4 w-4 mr-2" /> Register
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
