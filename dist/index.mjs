// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  variant = "primary",
  bgColor,
  className,
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: clsx_default(
        base,
        variants[variant],
        bgColor && `bg-[${bgColor}]`,
        className
      ),
      ...props,
      children
    }
  );
};
export {
  Button
};
