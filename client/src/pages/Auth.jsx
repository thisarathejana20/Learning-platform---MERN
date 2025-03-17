import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import CommonForm from "@/components/CommonForm/CommonForm";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const Auth = () => {
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
  } = useContext(AuthContext);

  const checkSignUpFormValidity = () =>
    signUpFormData &&
    signUpFormData.email !== "" &&
    signUpFormData.password !== "" &&
    signUpFormData.username !== "";

  const checkSignInFormValidity = () =>
    signInFormData.email !== "" && signInFormData.password !== "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <CommonForm
                formControls={signInFormControls}
                buttonText={"Sign In"}
                formData={signInFormData}
                setFormData={setSignInFormData}
                isButtonDisabled={!checkSignInFormValidity()}
              />
            </TabsContent>

            <TabsContent value="signup">
              <CommonForm
                formControls={signUpFormControls}
                buttonText={"Sign Up"}
                formData={signUpFormData}
                setFormData={setSignUpFormData}
                isButtonDisabled={!checkSignUpFormValidity()}
                handleSubmit={handleRegisterUser}
              />
            </TabsContent>
          </Tabs>
          <div className="my-4 text-center text-sm text-gray-600">
            or continue with
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center space-x-2"
            >
              <FcGoogle className="text-xl" /> <span>Google</span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center space-x-2"
            >
              <FaGithub className="text-xl" /> <span>GitHub</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
