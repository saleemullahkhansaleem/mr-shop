"use client";

import {
  LayoutDashboard,
  LogInIcon,
  User,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import Logout from "./Logout";
import { getCookie } from "cookies-next";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type userType = {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
};
export default function ProfileMenu() {
  const [user, setUser] = useState<userType | null>(null);

  const userCookie = getCookie("user");
  useEffect(() => {
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie as string) as userType;
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user cookie:", error);
      }
    }
  }, [userCookie]);

  const isLoggedIn = Boolean(userCookie);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isLoggedIn ? (
          <Avatar className="cursor-pointer">
            <AvatarImage src="/placeholder1.svg" alt="Admin profile" />
            <AvatarFallback className="text-sm">
              {user?.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            title="User"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
            <Separator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer" prefetch={false}>
                <UserIcon className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </DropdownMenuItem>
            {user?.role === "admin" && (
              <DropdownMenuItem asChild>
                <Link href="/admin" className="cursor-pointer" prefetch={false}>
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Admin Dashboard
                </Link>
              </DropdownMenuItem>
            )}
            <Separator />
            <Logout />
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/login" className="cursor-pointer" prefetch={false}>
                <LogInIcon className="h-4 w-4 mr-2" /> Login
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
