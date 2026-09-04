import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plans from "./pages/Plan";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const getPath = () => {
    return window.location.hash.replace("#", "") || "/";
  };

  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const pages = {
    "/": <Home />,
    "/plans": <Plans />,
    "/details": <Details />,
    "/about": <About />,
    "/contact": <Contact />,
    "/admin/login": <AdminLogin />,
    "/admin/dashboard": <AdminDashboard />,
  };

  return (
    <>
      <Navbar />
      {pages[path] || <Home />}
      <Footer />
    </>
  );
}

export default App;
