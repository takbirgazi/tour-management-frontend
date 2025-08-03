import { NavLink } from "react-router";

const Error = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl"> 404 | Page Not Found </h2>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label htmlFor="email" className="sr-only">Email</label>

                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium"> Sign Up </span>

                            <svg
                                className="size-5 shadow-sm rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="mt-8 flex justify-center">
                    <NavLink
                        to="/"
                        className="inline-block rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-gray-900 shadow-md transition hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                    >
                        Back To Home
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Error;