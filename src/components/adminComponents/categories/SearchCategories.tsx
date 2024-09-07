"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchCategories({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const router = useRouter();
  const searchValue = searchParams.search || "";
  const [search, setSearch] = useState(searchValue);
  return (
    <div className="relative flex-1">
      <Input
        type="search"
        name="search"
        placeholder="Search categories..."
        defaultValue={search}
        onChange={(e) =>
          router.replace(`/admin/categories?search=${e.target.value}`)
        }
        className="w-full rounded-lg bg-background pl-10"
      />
      <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
    </div>
  );
}
