"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

export default function ProfileHeader() {
  const user = useSelector((store: any) => store.user);
  return (
    <header className="p-4 flex items-center">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          {/* <AvatarImage src="/placeholder-user.jpg" alt="" /> */}
          <AvatarFallback>
            {user?.name?.slice(0, 2).toUpperCase() || "NA"}
          </AvatarFallback>
        </Avatar>
        <div className="grid gap-0.5">
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
        </div>
      </div>
    </header>
  );
}
