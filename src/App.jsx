import LandingPage from "./pages/landing_page"
import ChatPage from "./pages/chat_page"
import { Route, Routes } from "react-router"
import LogInPage from "./pages/log_in_page"
import SignUpPage from "./pages/sign_up_page"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/chat/:model" element={<ChatPage/>}></Route>
        <Route path="/login" element={<LogInPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
