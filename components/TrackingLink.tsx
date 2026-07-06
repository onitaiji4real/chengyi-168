import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackingLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  event: string;
  children: ReactNode;
};

export function TrackingLink({ href, event, children, ...props }: TrackingLinkProps) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} data-event={event} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} data-event={event} {...props}>
      {children}
    </a>
  );
}
