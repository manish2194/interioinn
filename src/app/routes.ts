import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HardwarePage } from "./pages/HardwarePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicePage } from "./pages/ServicePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/services/:serviceId",
    Component: ServicePage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/projects/:projectId",
    Component: ProjectDetailPage,
  },
  {
    path: "/hardware",
    Component: HardwarePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
