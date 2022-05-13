import { Routes, Route } from "react-router-dom";
import Content from "../components/Content/Content";
import CreateSaving from "../components/NewSaving/NewSaving";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/create" element={<CreateSaving />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default RoutesConfig;