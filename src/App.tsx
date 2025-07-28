import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmsIconSwitcher from "./components/SmsPart";
const App = () => {
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
