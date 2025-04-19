import { cn } from "@/lib/utils";
import { Righteous } from "next/font/google";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

const Logo = ({ className, type }: LogoProps) => {
  if (type === "full") {
    return <h2 className={cn(righteous.className, className)}>Syntalkic.</h2>;
  } else {
    return <p className={cn(righteous.className, className)}>S</p>;
  }
};

export default Logo;
