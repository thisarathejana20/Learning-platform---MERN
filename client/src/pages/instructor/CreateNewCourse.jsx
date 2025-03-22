import { useContext, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CourseLandingPage from "../../components/instructor-view/CourseLandingPage";
import CourseSettings from "../../components/instructor-view/CourseSettings";
import CourseCurriculum from "../../components/instructor-view/CourseCurriculum";
import { InstructorContext } from "@/context/InstructorProvider";
import { AuthContext } from "@/context/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";

const CreateNewCourse = () => {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

  const isEmpty = (value) => {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    return value === "" || value === null || value === undefined;
  };

  const validateFormData = () => {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
  };

  const handleCreateCourse = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);

    const courseFinalFormData = {
      instructorId: user?._id,
      instructorName: user?.username,
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };

    const response =
      currentEditedCourseId !== null
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        : await addNewCourseService(courseFinalFormData);

    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1);
      setCurrentEditedCourseId(null);
    }

    console.log(courseFinalFormData, "courseFinalFormData");
  };

  const fetchCurrentCourseDetails = async () => {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      console.log(setCourseFormData, response?.data, "setCourseFormData");
      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }

    console.log(response, "response");
  };

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

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
      <Button
        className="mt-4 w-full"
        onClick={handleCreateCourse}
        disabled={!validateFormData()}
      >
        Submit Course
      </Button>
    </div>
  );
};

export default CreateNewCourse;
