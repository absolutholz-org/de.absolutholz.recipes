import Link from "next/link";
import { ConditionalWrapper } from "../../app/components/ConditionalWrapper";
import { IBadge } from "./Badge.types";

export function Badge({
  text,
  href,
  count,
  color,
  size = "large",
}: IBadge): JSX.Element {
  return (
    <ConditionalWrapper
      condition={!!href}
      wrapper={(children) => <>{href && <Link href={href}>{children}</Link>}</>}
    >
      <span
        className={`inline-flex items-center rounded-full border-solid border-2 ${color.border}`}
      >
        <span
          className={`rounded-full ${size === "large" ? "" : "text-sm"}  ${
            size === "large" ? "px-4 py-1" : "px-2 py-0.5"
          } ${color.bg} text-white`}
        >
          {text}
        </span>
        {count && (
          <span
            className={`pr-2.5 pl-1.5 rounded-full font-semibold ${
              size === "large" ? "text-sm" : "text-xs"
            } ${color.text}`}
          >
            {count}
          </span>
        )}
      </span>
    </ConditionalWrapper>
  );
}
