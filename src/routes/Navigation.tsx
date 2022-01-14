import { BrowserRouter } from "react-router-dom";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
// import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";
import logo from "../logo.svg";
import { Suspense } from "react";


export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({to, path, Component }) => (
            <Route key={to} path={path} element={<Component/>} />
          ))}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
};
