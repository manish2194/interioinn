import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { HardwarePage } from "./pages/HardwarePage";
import { ContactPage } from "./pages/ContactPage";
import { ServicePage } from "./pages/ServicePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { GetQuotePage } from "./pages/GetQuotePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services/:serviceId", Component: ServicePage },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/:projectId", Component: ProjectDetailPage },
      { path: "hardware", Component: HardwarePage },
      { path: "contact", Component: ContactPage },
      { path: "get-quote", Component: GetQuotePage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:postId", Component: BlogPostPage },
    ],
  },
]);
