"use client";
import { deleteCookie } from "cookies-next";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "@/helper/http";
import { useToast } from "../ui/use-toast";

export default function Logout() {
  const router = useRouter();
  const { toast } = useToast();
  const handleLogout = async () => {
    try {
      const response = await api.get("/api/logout");
      if (response.success) {
        deleteCookie("token");
        deleteCookie("role");
        router.replace("/login");
        toast({
          description: "Logout successfully",
        });
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
      <LogOutIcon className="h-4 w-4 mr-2" />
      Logout
    </DropdownMenuItem>
  );
}
