import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollProgress />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;