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
      sessionStorage.setItem("user", JSON.stringify(data.data.user));
      let user = data.data.user;
      setAuth({ authenticated: true, user });
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
        setAuth({ authenticated: false, user: null });
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("user");
    setAuth({ authenticated: false, user: null });
  };

  const resetCredentials = () => {
    logoutUser();
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
        logoutUser,
        resetCredentials,
      }}
    >
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
