"use client";

import { usePathname } from "next/navigation";
import MiniWidget from "./MiniWidget";


interface WidgetWrapperProps {
  token: string;
}

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({ token }) => {
  const pathname = usePathname();

  if (!token || pathname === "/secret") return null;

  return <MiniWidget token={token} />;
};

export default WidgetWrapper;
