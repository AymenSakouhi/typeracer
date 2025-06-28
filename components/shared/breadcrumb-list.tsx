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
        {pathNamesArr.map((item, idx) => (
          <React.Fragment key={item}>
            <BreadcrumbItem className="group">
              <BreadcrumbLink
                className={`cursor-pointer ${idx === pathNamesArr.length - 1 ? "hidden" : "block"}`}
                href={`/${pathNamesArr
                  .slice(0, pathNamesArr.indexOf(item) + 1)
                  .join("/")}`}
              >
                {item}
              </BreadcrumbLink>
              <BreadcrumbPage
                className={`${idx === pathNamesArr.length - 1 ? "block" : "hidden"}`}
              >
                {item}
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="last:hidden" />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
