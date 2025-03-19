import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const courses = [
  { id: 1, name: "React Basics", students: 100, status: "active" },
  { id: 2, name: "Node.js Basics", students: 50, status: "inactive" },
  { id: 3, name: "JavaScript ES6", students: 150, status: "active" },
  { id: 4, name: "Python Basics", students: 200, status: "active" },
  { id: 5, name: "Django Basics", students: 75, status: "inactive" },
];
const InstructorCourses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Your Courses</h1>
        <Button
          onClick={() => navigate("/instructor/new-course")}
          variant="default"
        >
          Create New Course
        </Button>
      </div>
      <Table className="w-full bg-white shadow-md rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Course Name</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.students}</TableCell>
              <TableCell>{course.status}</TableCell>
              <TableCell className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <FaEdit /> <span>Edit</span>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <FaTrash /> <span>Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InstructorCourses;
