import type { ReactNode } from "react";
import { fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <div className={cn("font-sans", fontSans.variable)}>{children}</div>;
}
