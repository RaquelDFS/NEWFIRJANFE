import style from "./Shake.module.css";

// eslint-disable-next-line react/prop-types
export default function Shake({ children }) {
  return <div className={style.icone}>{children}</div>;
}
