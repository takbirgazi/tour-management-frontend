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
        removeTourTypes: builder.mutation({
            query: (tourTypeId) => ({
                url: `/tour/tour-types/${tourTypeId}`,
                method: "DELETE"
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
        }),

        addTour: builder.mutation({
            query: (tourData) => ({
                url: "/tour/create",
                method: "POST",
                data: tourData
            }),
            // invalidatesTags: ["TOUR_TYPE"]
        }),

    })
});



export const {
    useAddTourTypesMutation,
    useAllTourTypesQuery,
    useRemoveTourTypesMutation,
    useAddTourMutation,
} = tourApi;