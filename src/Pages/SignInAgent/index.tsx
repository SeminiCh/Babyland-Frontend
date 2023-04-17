/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import logoImage from "../../Assets/imageLogo002.png";
import signupImage from "../../Assets/imageSignin001.jpg";
import Footer from "../../Components/Footer";
import NavigationbarAgent from "../../Lib/NavigationBarAgent";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

interface AgentLoginFormData {
  agentCompanyName: string;
  agentPassword: string;
}

const agentLoginSchema: Yup.SchemaOf<AgentLoginFormData> = Yup.object({
  agentCompanyName: Yup.string().required("CompanyName is required"),
  agentPassword: Yup.string().required("Password is required"),
  // contact: Yup.array().of(
  //   Yup.object().shape({
  //     index: Yup.number().required("index must be present"),
  //     contact: Yup.string()
  //       .typeError("Invalid contact ID")
  //       .required("Contact ID is required"),
  //   }),
  // ),
});

function SignInAgent() {
  const navigate = useNavigate();

  const methods = useForm<AgentLoginFormData>({
    mode: "onChange",
    resolver: yupResolver(agentLoginSchema),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;
  console.log(errors);

  const onSubmit = handleSubmit(({ agentCompanyName, agentPassword }) => {
    const login = {
      agentCompanyName,
      agentPassword,
    };

    fetch("http://localhost:8080/api/v1/login/agentlogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === null) {
          setError("agentCompanyName", {
            message: "Company Name or Password is incorrect",
          });
        } else {
          localStorage.setItem("companyName", res.agentCompanyName);
          navigate("/nannyTableAgent", {
            state: { agentCompanyName: watch("agentCompanyName") },
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
                    htmlFor="companyName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company Name
                  </label>
                  <input
                    {...register("agentCompanyName")}
                    type="text"
                    name="agentCompanyName"
                    id="agentCompanyName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Company Name"
                  />
                  <p className="text-red-600 text-xs">
                    {errors && errors.agentCompanyName?.message}
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
                    {...register("agentPassword")}
                    type="agentPassword"
                    name="agentPassword"
                    id="agentPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  <p className="text-red-600 text-xs">
                    {errors && errors.agentPassword?.message}
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
                    href="AgentRegistration"
                    className="text-red-700 hover:underline dark:text-red-700"
                  >
                    Create account
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

export default SignInAgent;
