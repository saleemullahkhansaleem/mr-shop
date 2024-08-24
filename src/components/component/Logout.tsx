"use client";
import { deleteCookie } from "cookies-next";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => {
        deleteCookie("user");
        // setTrigger(true);
        router.replace("/login");
      }}
    >
      <LogOutIcon className="h-4 w-4 mr-2" />
      Logout
    </DropdownMenuItem>
  );
}
