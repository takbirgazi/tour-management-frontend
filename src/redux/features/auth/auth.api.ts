import { baseApi } from "@/redux/baseApi";
import type { IResponse, ISendOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        logOut: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags: ["USER"]
        }),
        senOtp: builder.mutation<IResponse<null>, ISendOtp>({
            query: (userInfo) => ({
                url: "/otp/send",
                method: "POST",
                data: userInfo
            })
        }),
        verifyOtp: builder.mutation({
            query: (userInfo) => ({
                url: "/otp/verify",
                method: "POST",
                data: userInfo
            })
        }),
        getData: builder.query({
            query: (userInfo) => ({
                url: "/user/me",
                method: "GET",
                data: userInfo
            }),
            providesTags: ["USER"]
        }),

    })
});



export const {
    useRegisterMutation,
    useLoginMutation,
    useSenOtpMutation,
    useVerifyOtpMutation,
    useGetDataQuery,
    useLogOutMutation,
} = authApi;