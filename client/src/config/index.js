export const signUpFormControls = [
  {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
    componentType: "input",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email address",
    componentType: "input",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter a password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email address",
    componentType: "input",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter a password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  email: "",
  password: "",
};

export const initialSignUpFormData = {
  username: "",
  email: "",
  password: "",
};
