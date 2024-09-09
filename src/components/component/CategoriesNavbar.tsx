import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { api } from "@/helper/http";
import IconLucide, { IconName } from "./IconLucide";

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

export default async function CategoriesNavbar() {
  const categories = await fetchCategories();
  return (
    <div className="container px-4 md:px-6 hidden xl:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {categories.map((category: Category, index: number) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1200px] lg:grid-cols-[.5fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <IconLucide
                          className="h-16 w-16"
                          iconName={category.iconName}
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {category.name}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {category.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {category.subCategories?.map(
                    (subItem: Category, index: number) => (
                      <ListItem
                        href={subItem.slug}
                        title={subItem.name}
                        key={index}
                      >
                        {subItem.description}
                      </ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
