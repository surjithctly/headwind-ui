import React from "react";
import { useForm } from "react-hook-form";

export default function Subscribe(props) {
  const { type } = props;
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: "onTouched",
  });
  const { isSubmitSuccessful, isSubmitting } = formState;
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const onSubmit = async (data, e) => {
    // console.log(data);

    const subscribe_data = {
      email: data.email,
      tags: [data.tags],
    };

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(subscribe_data, null, 4),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success === true) {
          setIsSuccess(true);
          setMessage("Success! You've been added to our list");
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage("Oops, Something went wrong! Please try again");
          console.log(result);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8">
        <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
          <h3 className="mb-2 text-2xl font-bold text-gray-700">
            {type == "components"
              ? `New Components every week!`
              : `Subscribe to Get Early Access`}
          </h3>
          <p className="text-gray-500">
            {type == "components"
              ? `Provide your email to get weekly updates and notification when we release new components`
              : `Provide your email to get email notification when we launch early beta access`}
          </p>
        </div>
        <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {type == "components" ? (
              <input
                type="hidden"
                name="tags"
                value="components"
                ref={register}
              />
            ) : (
              <input
                type="hidden"
                name="tags"
                value="earlyaccess"
                ref={register}
              />
            )}

            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: "Enter your email address",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 mt-5 text-white bg-gray-800 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  ` ${type == "components" ? "Notify me" : "Get Notified"} `
                )}
              </button>
            </div>

            {errors.email && (
              <div className="mt-1 text-red-500">
                <small>{errors.email.message}</small>
              </div>
            )}

            {isSubmitSuccessful && isSuccess && (
              <div className="mt-1 text-green-500">
                <small>{Message}</small>
              </div>
            )}

            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-1 text-red-500">
                <small>{Message}</small>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
