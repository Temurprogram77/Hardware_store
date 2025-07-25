import {
  AboutTheCompany,
  Article,
  Auth,
  Basket,
  Blog,
  ChangePassword,
  Comparison,
  Contacts,
  Delivery,
  Editing,
  FeaturedProducts,
  Home,
  MyAddress,
  MyOrders,
  NotFound,
  Ordering,
  PasswordRecovery,
  Payment,
  PrivacyPolicy,
  ProductCard,
  ProductCatalog,
  Profile,
  QuestionAndAnswer,
  Return,
  Reviews,
  SearchResults,
  Stock,
  Register,
  Lichniykabinet
} from "../pages";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <AboutTheCompany /> },
  { path: "/my-account", element: <Auth /> },
  { path: "/my-accounts", element: <Lichniykabinet /> },
  { path: "/basket", element: <Basket /> },
  { path: "/blog", element: <Blog /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/comparison", element: <Comparison /> },
  { path: "/article", element: <Article /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/delivery", element: <Delivery /> },
  { path: "/editing", element: <Editing /> },
  { path: "/featured-products", element: <FeaturedProducts /> },
  { path: "/my-address", element: <MyAddress /> },
  { path: "/my-orders", element: <MyOrders /> },
  { path: "/ordering", element: <Ordering /> },
  { path: "/password-recovery", element: <PasswordRecovery /> },
  { path: "/payment", element: <Payment /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/product-card", element: <ProductCard /> },
  { path: "/product-catalog", element: <ProductCatalog /> },
  { path: "/profile", element: <Profile /> },
  { path: "/q-and-a", element: <QuestionAndAnswer /> },
  { path: "/return", element: <Return /> },
  { path: "/reviews", element: <Reviews /> },
  { path: "/search-results", element: <SearchResults /> },
  { path: "/stock", element: <Stock /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];
