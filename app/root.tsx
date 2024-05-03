import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css?url";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
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
          <div className="container mx-auto">
            <Outlet />
          </div>

          <Scripts />
        </body>
      </html>
    );
  }
