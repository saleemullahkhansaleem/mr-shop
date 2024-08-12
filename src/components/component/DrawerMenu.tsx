import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Logo, MenuIcon, SearchIcon } from "../icons";
import { categories } from "@/data";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

export default function Component() {
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
        className="w-64 bg-background p-4 overflow-y-scroll"
      >
        <SheetTitle className="mb-2">Mr Shop</SheetTitle>
        <div className="flex flex-col gap-2">
          <div className="relative flex-1 max-w-md sm:hidden">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full bg-muted pl-10 pr-4 rounded-md h-auto"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark">
              <SearchIcon className="h-4 w-4" />
            </div>
          </div>
          {categories.map((category, index) =>
            !category.subcategories ? (
              <Link
                key={index}
                href="#"
                className="flex items-center gap-3 rounded-lg py-1  transition-all hover:text-primary"
                prefetch={false}
              >
                <Logo className="h-4 w-4" />
                {category.name}
              </Link>
            ) : (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg py-1 text-primary w-full transition-all hover:text-primary">
                  {category.icon && <category.icon className="h-4 w-4" />}
                  {category.name}
                  <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xl">
                    +
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 space-y-2">
                  {category.subcategories.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className="flex items-center gap-2"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          )}
          <Separator />
        </div>
      </SheetContent>
    </Sheet>
  );
}
