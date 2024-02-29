import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAddUserMutation } from "../store/index";
import { useNavigate } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";

function Form() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [addUser, addUserRes] = useAddUserMutation();

    // const isRegistered = () => {
    //     localStorage.setItem("isRegistered", true);
    // };

    const handleAddUser = (data) => {
        addUser(data);
    };

    // const navigateToSignIn = () => {
    //     navigate("/login");
    // };

    const navigateToHomePage = () => {
        navigate("/home");
    };

    useEffect(() => {
        if (addUserRes.status === "fulfilled") {
            reset();
            // dispatch(openModal(true));
            // isRegistered();
            navigate("/login");
        }
    }, [addUserRes, reset]);

    return (
        <form
            className="no-scrollbar w-9/12 overflow-auto rounded-lg bg-white/90 px-16 shadow-md md:mt-0 md:w-8/12 lg:rounded-none lg:p-0 lg:shadow-none"
            action=""
            onSubmit={handleSubmit(handleAddUser)}
        >
            <div className="group my-4 flex flex-col pt-6 2xl:my-4 ">
                <label className="form-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    id="username"
                    className={`register-input ${
                        errors?.username ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("username", {
                        required: true,
                        minLength: 5,
                    })}
                ></input>
                {errors.username && (
                    <p className="form-error">
                        Please enter a valid username. It should consist of
                        letters, numbers, underscores, and be between 3 to 20
                        characters long
                    </p>
                )}
            </div>

            <div className="group my-4 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    id="password"
                    className={`register-input ${
                        errors?.password ? "error" : "valid"
                    }`}
                    type="password"
                    autoComplete="on"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern:
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    })}
                ></input>
                {errors.password && (
                    <p className="form-error">
                        Please enter a valid password. It must be at least 8
                        characters long and include a mix of letters, numbers,
                        and symbols.
                    </p>
                )}
            </div>

            <div className="group my-4 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="firstName">
                    FIRST NAME
                </label>
                <input
                    id="firstName"
                    className={`register-input ${
                        errors?.firstName ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("firstName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[a-zA-Z ]*$/,
                    })}
                ></input>
                {errors.firstName && (
                    <p className="form-error">
                        Please enter a valid first name.
                    </p>
                )}
            </div>

            <div className="group my-4 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="lastName">
                    LAST NAME
                </label>
                <input
                    id="lastName"
                    className={`register-input ${
                        errors?.lastName ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("lastName", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[a-zA-Z ]*$/,
                    })}
                ></input>
                {errors.lastName && (
                    <p className="form-error">
                        Please enter a valid last name.
                    </p>
                )}
            </div>

            <div className="group my-4 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="email">
                    EMAIL
                </label>
                <input
                    id="email"
                    className={`register-input ${
                        errors?.email ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                ></input>
                {errors.email && (
                    <p className="form-error">Please enter a valid email.</p>
                )}
            </div>

            <div className="group my-4 flex flex-col 2xl:mb-4">
                <label className="form-label" htmlFor="address">
                    ADDRESS
                </label>
                <input
                    id="address"
                    className={`register-input ${
                        errors?.address ? "error" : "valid"
                    }`}
                    type="text"
                    autoComplete="on"
                    {...register("address", {
                        required: true,
                        pattern: /^[a-zA-Z0-9\s,'.-]*$/i,
                    })}
                ></input>
                {errors.address && (
                    <p className="form-error">Please enter a valid address.</p>
                )}
            </div>
            <div className="flex flex-col ">
                <button
                    type="submit"
                    className="form-button flex items-center justify-center hover:cursor-pointer"
                >
                    {addUserRes.isLoading ? (
                        <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
                    ) : (
                        "Get Started"
                    )}
                </button>

                <div className="flex flex-col justify-center text-center">
                    <div className="flex flex-col justify-center sm:flex-row">
                        <p className="pr-1 font-light">
                            Already have an account?
                        </p>
                        <p className="hover:cursor-pointer">Sign in</p>
                    </div>

                    <p
                        className="mt-2 pb-6 hover:cursor-pointer"
                        onClick={navigateToHomePage}
                    >
                        Go Back to Homepage
                    </p>
                </div>
            </div>
        </form>
    );
}
// onClick={(e) => handleAddUser(e)}
// Get Started
export default Form;
