import { Package2Icon } from "lucide-react";
import Link from "next/link";
import SideNav from "./SideNav";

export default function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 lg:block w-64 px-4">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-2">
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
          <SideNav />
        </div>
      </div>
    </div>
  );
}
