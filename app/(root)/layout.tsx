import Link from "next/link";
import { ReactNode } from "react";
import { Righteous } from "next/font/google";
import { isAuthenticated } from "@/lib/auth.actions";
import { redirect } from "next/navigation";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const RootLayouts = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href={"/"} className="flex items-center gap-2">
          <h2 className={`${righteous.className}`}>Syntalkic.</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayouts;
