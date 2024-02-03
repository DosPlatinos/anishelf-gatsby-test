import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";

export default function Layout({ children }: { children: PropsWithChildren }) {
  return (
    <>
      <nav>
        <Link to="https://anilist.co/api/v2/oauth/authorize?client_id=13852&response_type=token">
          Login
        </Link>
      </nav>
      {children}
    </>
  );
}
