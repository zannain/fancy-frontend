import { LinksFunction } from "@remix-run/node";
import buttonStyles from "./Button.css?url"
type ButtonProps = {
  text: string;
  size?: string
};


export default function Button({ text, size = 'sm' }: ButtonProps) {
  return (
    <div>
      <button className={`btn-${size}`}>{text}</button>
    </div>
  );
}
