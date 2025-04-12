import { ReactNode } from "react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      <div className="flex flex-col gap-2 justify-center items-center text-8xl md:text-9xl">
        <p className={`${righteous.className}`}>Syntalkic.</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
