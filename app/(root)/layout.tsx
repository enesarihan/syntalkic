import Link from "next/link";
import { ReactNode } from "react";
import { Righteous } from "next/font/google";
import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import { ModeToggle } from "@/components/Mode-toggle";
import SignOutButton from "@/components/Sign-Out-Button";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const RootLayouts = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  const user = await getCurrentUser();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav className="flex justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <h2 className={`${righteous.className}`}>Syntalkic.</h2>
        </Link>
        <div className="flex flex-row gap-2">
          <ModeToggle />
          <SignOutButton userName={user?.name || ""} />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayouts;
