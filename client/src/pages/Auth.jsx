import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
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
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1"
                  />
                </div>
                <Button className="w-full mt-2">Sign In</Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="mt-1"
                  />
                </div>
                <Button className="w-full mt-2">Sign Up</Button>
              </form>
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
