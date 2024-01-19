import { UserNav } from "./user-nav";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNavigation } from "@/components/main-navigation";
import Image from "next/image";
export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            width={64}
            height={64}
            alt="Logo INEI"
            priority={true}
          />
        </Link>
        <MainNavigation />
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
