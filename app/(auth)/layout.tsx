import { ReactNode } from "react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className={`${righteous.className} text-6xl md:text-9xl`}>
          Syntalkic.
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
