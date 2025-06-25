import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/shared/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
