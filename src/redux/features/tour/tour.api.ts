import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addTourTypes: builder.mutation({
            query: (tourTypeName) => ({
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourTypeName
            }),
            invalidatesTags: ["TOUR_TYPE"]
        }),
        allTourTypes: builder.query({
            query: () => ({
                url: "/tour/tour-types",
                method: "GET"
            }),
            providesTags: ["TOUR_TYPE"],
            transformResponse: (response) => response?.data
        })


    })
});



export const {
    useAddTourTypesMutation,
    useAllTourTypesQuery,

} = tourApi;