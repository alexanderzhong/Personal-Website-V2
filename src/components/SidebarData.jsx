import React from "react";
import { Home, Layers3, User } from "lucide-react";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home aria-hidden="true" strokeWidth={2} />,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <Layers3 aria-hidden="true" strokeWidth={2} />,
  },
  {
    title: "About Me",
    path: "/aboutme",
    icon: <User aria-hidden="true" strokeWidth={2} />,
  },
];
