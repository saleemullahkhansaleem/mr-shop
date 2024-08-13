"use client";

import {
  HomeIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "../ui/badge";
import { SheetClose } from "../ui/sheet";
import React from "react";

export const adminNavLinks = [
  {
    id: 1,
    icon: HomeIcon,
    label: "Dashboard",
    url: "/admin/dashboard",
    notifications: 4,
  },
  {
    id: 2,
    icon: ShoppingCartIcon,
    label: "Orders",
    url: "/admin/orders",
  },
  {
    id: 3,
    icon: PackageIcon,
    label: "Products",
    url: "/admin/products",
    notifications: 10,
  },
  {
    id: 4,
    icon: UsersIcon,
    label: "Customers",
    url: "/admin/customers",
    notifications: 2,
  },
  {
    id: 5,
    icon: SettingsIcon,
    label: "Settings",
    url: "/admin/settings",
  },
];
export default function SideNav({ withSheetClose }: any) {
  const pathName = usePathname();
  const [SheetCloseWrapper, shetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];
  return (
    <nav className="grid items-start text-sm font-medium">
      {adminNavLinks.map((link) => (
        <SheetCloseWrapper {...shetCloseWrapperProps} key={link.id}>
          <Link
            key={link.id}
            href={link.url}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
              pathName === link.url
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            }  transition-all hover:text-primary`}
            prefetch={false}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
            {link.notifications && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {link.notifications}
              </Badge>
            )}
          </Link>
        </SheetCloseWrapper>
      ))}
    </nav>
  );
}
