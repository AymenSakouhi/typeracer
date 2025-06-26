"use client";

import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbLi() {
  const pathname = usePathname();
  const pathNamesArr = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathNamesArr.map((item) => (
          <React.Fragment key={item}>
            <BreadcrumbItem className="group">
              <BreadcrumbLink
                className="group-not-last:hidden"
                href={`/${item}`}
              >
                {item}
              </BreadcrumbLink>
              <BreadcrumbPage className="group-last:block">
                {item}
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block last:hidden" />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
