import { Routes, Route } from "react-router-dom";
import Content from "./Content";
import CreateSaving from "./CreateSaving";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/create" element={<CreateSaving />} />
    </Routes>
  )
}

export default RoutesConfig;