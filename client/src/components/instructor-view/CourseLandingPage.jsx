import { InstructorContext } from "@/context/InstructorProvider";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import FormControls from "../CommonForm/FormControls";
import { courseLandingPageFormControls } from "@/config";

const CourseLandingPage = () => {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Page</CardTitle>
      </CardHeader>
      {/* Course Landing Page content */}
      <CardContent>
        <FormControls
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
          formControls={courseLandingPageFormControls}
        />
      </CardContent>
    </Card>
  );
};

export default CourseLandingPage;
