import {
  OrganizationSwitcher,
  SignedOut,
  SignInButton,
  UserButton,
  OrganizationList,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import UmatLogo from "../../public/umat-removebg-preview.webp";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex flex-wrap items-center justify-between p-6">
      <Link href="/" className="text-xl font-bold">
        <span className="flex items-center">
          <Image src={UmatLogo} alt="UMaT Logo" width={32} height={32} />
          UMaT-SRID Project Repository{" "}
        </span>
      </Link>
      <div>
        <OrganizationSwitcher />
        <UserButton />
        <SignedOut>
          <SignInButton>
            <Button>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
