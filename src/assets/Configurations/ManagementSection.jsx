import FrontPage from "../Pages/FrontPage";
import ProductOverview from "../Pages/Product-Overview";
import Products from "../Pages/Products";
  

 export const PageRoutes = [
  { path: "/", element: <FrontPage /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <ProductOverview /> },
//   { path: "/brand", element: <Brand /> },
//   { path: "/category", element: <Category /> },
//   { path: "/sub-category", element: <SubCategory /> },
//   { path: "/attribute", element: <Attribute /> },
//   { path: "/unit", element: <Unit /> },
//   { path: "/user", element: <Users /> },
//   { path: "/admin", element: <Users /> },
//   { path: "/customer", element: <Users /> },
//   { path: "/seller", element: <Users /> },
//   { path: "/tax", element: <Tax /> },
//   { path: "/role", element: <Role /> },
//   { path: "/product-add", element: <AddProduct /> },
//   { path: "/product-list", element: <Products /> },
//   { path: "/notifications", element: <Notifications /> },
//   { path: "/alerts", element: <Alerts /> },
//   { path: "/global-alerts", element: <GlobalAlerts /> },
];