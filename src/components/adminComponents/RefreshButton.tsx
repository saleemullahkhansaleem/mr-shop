"use client";

import { RotateCw } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <Button
      onClick={router.refresh}
      title="Refresh"
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <RotateCw className="absolute h-4 w-4" />
      <span className="sr-only">Refresh</span>
    </Button>
  );
}
