import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
