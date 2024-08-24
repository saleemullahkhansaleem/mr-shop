"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Settings, Store } from "lucide-react";
import { Logout } from "../component";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { userType } from "../component/ProfileMenu";

export default function AdminProfileMenu() {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="/placeholder1.svg" alt="Admin profile" />
          <AvatarFallback className="text-sm">
            {user?.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/" className="cursor-pointer" prefetch={false}>
            <Store className="h-4 w-4 mr-2" />
            Go to Store
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/admin/settings"
            className="cursor-pointer"
            prefetch={false}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
