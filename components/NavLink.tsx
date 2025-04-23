"use client";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

const NavLink = forwardRef<HTMLAnchorElement, LinkProps & { className?: string; children?: React.ReactNode }>(
  ({ href, children, className, ...props }, ref) => (
    <Link
      href={href}
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
);

NavLink.displayName = "NavLink";
export default NavLink;
