import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import RouteGuard from "./components/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import InstructorLayout from "./components/instructor-view/InstructorLayout";
import StudentLayout from "./components/student-view/StudentLayout";
import StudentHomePage from "./pages/student/StudentHomePage";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <RouteGuard
            authenticated={auth.authenticated}
            element={<Auth />}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor"
        element={
          <RouteGuard
            authenticated={auth?.authenticated}
            element={<InstructorLayout />}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/student"
        element={
          <RouteGuard
            authenticated={auth?.authenticated}
            element={<StudentLayout />}
            user={auth?.user}
          />
        }
      />
      <Route path="" element={<StudentHomePage />} />
      <Route path="/home" element={<StudentHomePage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
