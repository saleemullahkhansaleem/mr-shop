import Link from "next/link";
import SideNav from "./SideNav";

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-64 relative">
      <div className="border-r bg-muted/40 w-64 px-4 flex flex-col gap-2 fixed h-screen">
        <div className="flex h-[60px] items-center px-2 relative">
          <div className="h-[59px] w-[1px] absolute top-0 -right-[17px] bg-background/60"></div>
          <Link
            href="admin"
            className="flex items-center gap-2 font-semibold"
            prefetch={false}
          >
            <h1 className="uppercase font-extrabold text-xl sm:text-2xl">
              Mr Shop
            </h1>
          </Link>
        </div>
        <div className="flex-1">
          <SideNav />
        </div>
      </div>
    </div>
  );
}
