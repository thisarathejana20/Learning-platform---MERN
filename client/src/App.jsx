import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import RouteGuard from "./components/RouteGuard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import StudentLayout from "./components/student-view/StudentLayout";
import StudentHomePage from "./pages/student/StudentHomePage";
import NotFound from "./pages/notfound/NotFound";
import CreateNewCourse from "./pages/instructor/CreateNewCourse";
import Instructor from "./pages/instructor/Instructor";
import Courses from "./pages/student/Courses";
import CourseDetails from "./pages/student/CourseDetails";
import PaymentReturn from "./pages/student/PaymentReturn";
import StudentCourses from "./pages/student/StudentCourses";
import CourseProgress from "./pages/student/CourseProgress";
import HomePage from "./pages/student/HomePage";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <RouteGuard
            authenticated={auth?.authenticated}
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
            element={<Instructor />}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/new-course"
        element={
          <RouteGuard
            authenticated={auth?.authenticated}
            element={<CreateNewCourse />}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor/edit-course/:courseId"
        element={
          <RouteGuard
            authenticated={auth?.authenticated}
            element={<CreateNewCourse />}
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
      >
        <Route path="" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/details/:id" element={<CourseDetails />} />
        <Route path="payment-return" element={<PaymentReturn />} />
        <Route path="student-courses" element={<StudentCourses />} />
        <Route path="course-progress/:id" element={<CourseProgress />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
