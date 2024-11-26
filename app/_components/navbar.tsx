"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const handdleToggleClassName = (arg: string) => {
    return pathname === arg
      ? "text-primary font-bold"
      : "text-muted-foreground";
  };

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      {/* Left */}
      <div className="flex items-center gap-10">
        <Image src="logo.svg" alt="Finance AI" width={183} height={39} />
        <Link href="/" className={handdleToggleClassName("/")}>
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={handdleToggleClassName("/transactions")}
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={handdleToggleClassName("/subscription")}
        >
          Assinatura
        </Link>
      </div>
      {/* Right  */}
      <UserButton showName />
    </nav>
  );
};

export default NavBar;
