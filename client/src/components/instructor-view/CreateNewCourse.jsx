import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CourseLandingPage from "./CourseLandingPage";
import CourseSettings from "./CourseSettings";
import CourseCurriculum from "./CourseCurriculum";

const CreateNewCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    curriculum: "",
    settings: {},
  });

  const handleSubmit = () => {
    console.log("Course Data:", courseData);
    alert("Course Created Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Course</h1>

      <Tabs defaultValue="curriculum">
        <TabsList className="mb-4">
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="landing">Course Landing Page</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Curriculum Tab */}
        <TabsContent value="curriculum">
          <h2 className="text-lg font-semibold mb-2">Course Curriculum</h2>
          <CourseCurriculum />
        </TabsContent>

        {/* Course Landing Page Tab */}
        <TabsContent value="landing">
          <h2 className="text-lg font-semibold mb-2">Course Details</h2>
          <CourseLandingPage />
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <h2 className="text-lg font-semibold mb-2">Course Settings</h2>
          <CourseSettings />
        </TabsContent>
      </Tabs>

      {/* Submit Button */}
      <Button className="mt-4 w-full" onClick={handleSubmit}>
        Submit Course
      </Button>
    </div>
  );
};

export default CreateNewCourse;
