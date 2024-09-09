import { MenuIcon, RotateCw } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../component/ThemeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import SideNav from "./SideNav";
import AdminProfileMenu from "./AdminProfileMenu";
import RefreshButton from "./RefreshButton";
import AdminPageTitle from "./AdminPageTitle";

export default function AdminHeader() {
  return (
    <div className="sticky top-0 z-10">
      <header className="flex h-14 lg:h-[60px] items-center gap-2 md:gap-4 border-b bg-muted/40 px-2 md:px-6 w-full backdrop-blur-lg">
        <Sheet>
          <SheetTrigger className="lg:hidden" asChild>
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
            <SideNav withSheetClose />
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex items-center gap-4">
          <AdminPageTitle />
          <RefreshButton />
        </div>
        <div className="flex items-center md:ml-auto gap-2 lg:gap-4">
          <ThemeToggle />
          <AdminProfileMenu />
        </div>
      </header>
    </div>
  );
}
