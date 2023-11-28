import clsx from "clsx";

export function Heading({
  as: Comp = "h1",
  size = "8xl",
  weight = "bold",
  children,
  className,
}) {
  return (
    <Comp
      className={clsx(
        weight ==="semibold" && "font-semibold",
        weight ==="bold" && "font-bold",
        size === "8xl" && "text-8xl",
        size === "6xl" && "text-6xl",
        size === "5xl" && "text-5xl",
        size === "4xl" && "text-4xl",
        size === "3xl" && "text-3xl",
        size === "2xl" && "text-2xl",
        size === "1xl" && "text-1xl",
        size === "base" && "text-base",

        className,
      )}
    >
      {children}
    </Comp>
  );
}
