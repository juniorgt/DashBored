import { siteConfig } from "@/config/site";
import { UserNav } from "./user-nav";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
