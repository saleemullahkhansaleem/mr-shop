import { AdminHeader, Sidebar } from "@/components/adminComponents";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 max-w-full h-screen overflow-auto">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}
