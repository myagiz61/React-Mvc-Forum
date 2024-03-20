import "../src/assets/style.scss";
import ListPostController from "./pages/ListPosts/ListPostController";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./components/HeaderView";
import AddPostController from "./pages/AddPost/AddPostController";
function App() {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
