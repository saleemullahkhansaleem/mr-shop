import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Logo, MenuIcon, SearchIcon } from "../icons";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import IconLucide, { IconName } from "./IconLucide";
import { api } from "@/helper/http";

async function fetchCategories() {
  try {
    const response = await api.get("/api/category");
    if (response?.success) {
      return response.data;
    } else {
      console.log("Failed to get categories");
      return [];
    }
  } catch (error) {
    console.log("Error in getting categories: ", error);
    return [];
  }
}

interface Category {
  _id: number;
  name: string;
  slug: string;
  iconName: IconName;
  description: string;
  subCategories?: Category[];
}

export default async function CategoriesMenuMobile() {
  const categories = await fetchCategories();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="z-20 rounded-full">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 bg-background p-4 overflow-y-auto"
      >
        <SheetTitle className="mb-2">Mr Shop</SheetTitle>
        <div className="flex flex-col gap-2">
          {categories.map((category: Category, index: number) =>
            !category.subCategories ? (
              <Link
                key={index}
                href={category.slug}
                className="flex items-center gap-3 rounded py-1  transition-all hover:text-primary"
                prefetch={false}
              >
                <Logo className="h-4 w-4" />
                {category.name}
              </Link>
            ) : (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center gap-3 rounded py-1 text-primary w-full transition-all hover:text-primary">
                  {category.iconName && (
                    <IconLucide
                      className="h-5 w-5"
                      iconName={category.iconName}
                    />
                  )}
                  {category.name}
                  <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                    +
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 space-y-2">
                  {category.subCategories.map(
                    (item: Category, index: number) => (
                      <Link
                        key={index}
                        href={item.slug}
                        className="flex items-center gap-2"
                        prefetch={false}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </CollapsibleContent>
              </Collapsible>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
