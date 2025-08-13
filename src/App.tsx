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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetch("/api/data1"),
          fetch("/api/data2"),
        ]);
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
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <SmsIconSwitcher />
      <Footer />
    </Router>
  );
};

export default App;
