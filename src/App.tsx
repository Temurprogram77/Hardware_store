import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '@ant-design/v5-patch-for-react-19';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
