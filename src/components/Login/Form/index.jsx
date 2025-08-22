import { useEffect, useState } from "react";

import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

// import * as yup from "yup";

import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";

// import email from "@/assets/icons/email.svg";
// import pass from "@/assets/icons/pass.svg";

import "./style.css";

// const loginSchema = yup.object({
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

export const Form = () => {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [errors, setErrors] = useState({});
  const { login, user, authenticated } = usePrivy();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));

  //   if (errors[name]) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       [name]: "",
  //     }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     await loginSchema.validate(formData, { abortEarly: false });

  //     setErrors({});

  //     console.log("Form is valid:", formData);

  //     navigate("/home");
  //   } catch (validationErrors) {
  //     const newErrors = {};
  //     validationErrors.inner.forEach((error) => {
  //       newErrors[error.path] = error.message;
  //     });
  //     setErrors(newErrors);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="login">
      {/* <form className="login-form" onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? "error" : ""}
          img={email}
          errors={errors.email}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={errors.password ? "error" : ""}
          img={pass}
          errors={errors.password}
        /> */}

      {/* <Button
        type="submit"
        disabled={isSubmitting}
        style={{
          opacity: isSubmitting ? 0.7 : 1,
          cursor: isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Вхід..." : "Login"}
      </Button> */}

      <Button
        type="button"
        style={{
          width: 374,
        }}
        onClick={handleLogin}
      >
        Login
      </Button>
      {/* </form> */}
    </div>
  );
};
