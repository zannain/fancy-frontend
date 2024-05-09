import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import tailWindstyles from "./tailwind.css?url";
import mainStyles from "./main.css?url";
import buttonStyles from "./components/Button/Button.css?url"
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailWindstyles },
  { rel: "stylesheet", href: mainStyles },
  { rel: "stylesheet", href: buttonStyles},
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wdth,wght@0,87.5,100..900;1,87.5,100..900&display=swap"}
];
export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <div>
            <Outlet />
          </div>

          <Scripts />
        </body>
      </html>
    );
  }
