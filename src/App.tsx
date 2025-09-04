import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from "./routes/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmsIconSwitcher from "./components/SmsPart";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Loading")
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <SmsIconSwitcher />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
