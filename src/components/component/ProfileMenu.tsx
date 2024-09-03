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
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ProfileMenu() {
  const user = useSelector((state: RootState) => state.user);
  console.log("user: ", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user?.isLoggedIn ? (
          <Avatar className="cursor-pointer">
            {/* <AvatarImage src="/placeholder.svg" alt="Admin profile" /> */}
            <AvatarFallback className="text-sm">
              {user?.name?.slice(0, 2).toUpperCase() || "NA"}
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
        {user?.isLoggedIn ? (
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
