import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CategoryDetail from "./pages/CategoryDetail";
import WritePost from "./pages/WritePost";
import DetailPost from "./pages/DetailPost";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";
import Mypage from "./pages/Mypage/Mypage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/chat-list" element={<ChatList />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/write-post" element={<WritePost />} />
          <Route path="/post/:id" element={<DetailPost />} />
          <Route path="/category/:category/:id" element={<CategoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
