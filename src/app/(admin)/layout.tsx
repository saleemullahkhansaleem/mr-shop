import { AdminHeader, SideNav } from "@/components/adminComponents";
import { Footer, Header } from "@/components/component";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <SideNav />
        <div className="flex flex-col">
          <AdminHeader />
          {children}
        </div>
      </div>
    </>
  );
}
