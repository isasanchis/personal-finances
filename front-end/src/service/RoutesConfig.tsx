import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import CreateSaving from "../components/NewSaving/NewSaving";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const RoutesConfig = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateSaving />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default RoutesConfig;