import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import BreadcrumbList from "@/components/shared/breadcrumb-list";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 w-full">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <BreadcrumbList />
        <Link href="https://github.com/AymenSakouhi/" className="ml-auto">
          Github
        </Link>
      </div>
    </header>
  );
};

export default header;
