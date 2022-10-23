import React, { useState } from "react";

import { registerWithEmailAndPass } from "../../Auth/FirebaseAuth";

import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputEmailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputPasswordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    await registerWithEmailAndPass(email, password);
    navigate("/login");
  };

  const handleSubmitKeyPres = async (e) => {
    if (e.key === "Enter") {
      await registerWithEmailAndPass(email, password);
      navigate("/login");
    }
  };
  return (
    <section className="h-screen flex justify-around items-center">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <span className="text-center mx-4 mb-0 font-bold">
                  Register
                </span>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 my-2 text-xl font-normal text-gray-700 bg-white py-3 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  value={email}
                  onChange={inputEmailOnChangeHandler}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-3 mb-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={inputPasswordOnChangeHandler}
                />
              </div>
              <Button
                variant="contained"
                onClick={handleSubmit}
                onKeyPress={handleSubmitKeyPres}
              >
                Register
              </Button>
              <span className="mx-5">
                Already have account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
