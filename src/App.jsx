import { Route, Routes } from "react-router-dom";
// import { disable_subbar } from "./assets/Configurations/Config.jsx";

import { PageRoutes } from "./assets/Configurations/ManagementSection.jsx";
import Navbar from "./assets/Components/Navbar.jsx";
 
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      {PageRoutes?.map((item) => {
        return (
          <Route
            key={item.path || "/404"}
            path={item.path || "404"}
            element={item.element}
            />
          );
        })}
    </Routes>
        </>
  );
};

export default App;
