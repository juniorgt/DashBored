"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuTitles: { title: string; href: string }[] = [
  {
    title: "Plan de gobierno digital - PGD",
    href: "/dashboard/PGD",
  },
  {
    title: "Plan operativo institucinal - POI",
    href: "/dashboard/POI",
  },
  {
    title: "Proyectos",
    href: "/dashboard/Projects",
  },
];

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuTitles.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
