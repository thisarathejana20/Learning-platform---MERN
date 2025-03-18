import { Skeleton } from "@/components/ui/skeleton";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [auth, setAuth] = useState({ authenticated: false, user: null });
  const [loading, setLoading] = useState(true);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
    console.log(data);
  };

  const handleLogInUser = async (e) => {
    e.preventDefault();
    const data = await loginService(signInFormData);
    if (data.success) {
      sessionStorage.setItem(
        "access_token",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({ authenticated: true, user: data.data.user });
    } else {
      setAuth({ authenticated: false, user: null });
    }
    setLoading(false);
  };

  const checkAuth = async () => {
    try {
      const data = await checkAuthService();
      if (data.success) {
        setAuth({ authenticated: true, user: data.data.user });
      } else {
        setAuth({ authenticated: false, user: null });
      }
    } catch (error) {
      console.error(error);
      if (!error?.response?.data?.success) {
        sessionStorage.removeItem("access_token");
        setAuth({ authenticated: false, user: null });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
        handleLogInUser,
        auth,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
