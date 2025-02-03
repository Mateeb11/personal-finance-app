import classes from "./header.module.scss";

export default function Header({ title }: any) {
  return <h1 className="text-secondary-900 text-3xl font-bold">{title}</h1>;
}
