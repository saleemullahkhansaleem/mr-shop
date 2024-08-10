import {
  HomeIcon,
  Package2Icon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function SideNav() {
  return (
    <div className="hidden border-r bg-muted/40 lg:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              prefetch={false}
            >
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary  transition-all hover:text-primary"
              prefetch={false}
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders{" "}
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                12
              </Badge>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              prefetch={false}
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              prefetch={false}
            >
              <UsersIcon className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              prefetch={false}
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
