import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthProvider";
import { useContext, useState } from "react";
import { FaChalkboardTeacher, FaBook, FaSignOutAlt } from "react-icons/fa";
import InstructorCourses from "./InstructorCourses";

const InstructorLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { logoutUser } = useContext(AuthContext);
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col space-y-4">
        <h2 className="text-xl font-bold text-center">Instructor Panel</h2>
        <Button
          variant={activeTab === "dashboard" ? "default" : "outline"}
          className="flex items-center space-x-2"
          onClick={() => setActiveTab("dashboard")}
        >
          <FaChalkboardTeacher /> <span>Dashboard</span>
        </Button>
        <Button
          variant={activeTab === "courses" ? "default" : "outline"}
          className="flex items-center space-x-2"
          onClick={() => setActiveTab("courses")}
        >
          <FaBook /> <span>Courses</span>
        </Button>
        <Button
          variant="destructive"
          className="flex items-center space-x-2 mt-auto"
          onClick={logoutUser}
        >
          <FaSignOutAlt /> <span>Logout</span>
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        )}
        {activeTab === "courses" && <InstructorCourses />}
      </main>
    </div>
  );
};

export default InstructorLayout;
