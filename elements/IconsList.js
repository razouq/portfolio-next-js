import Link from "./Icon";

export default function IconsList({children}) {
  return (
    <ul className="flex justify-end text-2xl">
      {children}
    </ul>
  );
}
