/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

import { yupResolver } from "@hookform/resolvers/yup";
import { type } from "os";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logoImage from "../../Assets/imageLogo002.png";
import signupImage from "../../Assets/imageSignin001.jpg";
import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

interface LoginFormData {
  username: string;
  password: string;
}

const customerLoginSchema: Yup.SchemaOf<LoginFormData> = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  // contact: Yup.array().of(
  //   Yup.object().shape({
  //     index: Yup.number().required("index must be present"),
  //     contact: Yup.string()
  //       .typeError("Invalid contact ID")
  //       .required("Contact ID is required"),
  //   }),
  // ),
});

function SignIn() {
  const navigate = useNavigate();
  const methods = useForm<LoginFormData>({
    mode: "onChange",
    resolver: yupResolver(customerLoginSchema),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;
  console.log(errors);

  const onSubmit = handleSubmit(({ username, password }) => {
    const login = {
      usernameCustomer: username,
      passwordCustomer: password,
    };

    fetch("http://localhost:8080/api/v1/login/customerlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === null) {
          setError("username", {
            message: "Username or Password is incorrect",
          });
        } else {
          navigate("/myNannies", {
            state: { usernameCustomer: watch("username") },
          });
        }
      });
  });
  return (
    <>
      <Navigationbarcustomer />
      <main className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg border-gray-500 shadow-md flex justify-center items-center">
          <div className="h-full flex-1 w-80">
            <img
              className="h-full rounded-md object-cover"
              src={signupImage}
              alt="/"
            />
          </div>
          <div className="flex-1 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <FormProvider {...methods}>
              <form className="space-y-6" onSubmit={onSubmit}>
                <h5 className="text-xl flex items-center font-medium text-gray-900 dark:text-white">
                  <img
                    className="w-30 h-20 rounded-md"
                    src={logoImage}
                    alt="/"
                  />
                  <p>Log into your Account</p>
                </h5>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="username"
                    required
                  />
                  <p className="text-red-600 text-xs">
                    {errors && errors.username?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                  <p className="text-red-600 text-xs">
                    {errors && errors.password?.message}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="RegisterCustomer"
                    className="text-red-700 hover:underline dark:text-red-700"
                  >
                    Create account
                  </a>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  <label
                    htmlFor="navigateAgent"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2"
                  >
                    Do you want to insert nanny details?
                  </label>
                  <a
                    href="SignInAgent"
                    className="ml-auto text-sm text-red-700 hover:underline dark:text-red-700"
                  >
                    Click Here!
                  </a>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
