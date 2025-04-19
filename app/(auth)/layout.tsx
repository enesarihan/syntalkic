import Logo from "@/components/Logo";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Logo type="full" className="text-6xl md:text-9xl" />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
