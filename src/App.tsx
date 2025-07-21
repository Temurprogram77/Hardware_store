import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutTheCompany from "./pages/AboutTheCompany";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Blog from "./pages/Blog";
import ChangePassword from "./pages/ChangePassword";
import Comparison from "./pages/Comparison";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Editing from "./pages/Editing";
import FeaturedProducts from "./pages/FeaturedProducts";
import MyAddress from "./pages/MyAddress";
import MyOrders from "./pages/MyOrders";
import Ordering from "./pages/Ordering";
import PasswordRecovery from "./pages/PasswordRecovery";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductCard from "./pages/ProductCard";
import ProductCatalog from "./pages/ProductCatalog";
import Profile from "./pages/Profile";
import QuestionAndAnswer from "./pages/QuestionAndAnswer";
import Return from "./pages/Return";
import Reviews from "./pages/Reviews";
import SearchResults from "./pages/SearchResults";
import Stock from "./pages/Stock";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutTheCompany />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/editing" element={<Editing />} />
        <Route path="/featured-products" element={<FeaturedProducts />} />
        <Route path="/my-address" element={<MyAddress />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/product-card" element={<ProductCard />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/q-and-a" element={<QuestionAndAnswer />} />
        <Route path="/return" element={<Return />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
