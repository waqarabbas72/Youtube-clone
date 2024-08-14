import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3/",
    //   API_KEY: "AIzaSyBG9vS1AxPoHcskKMxDQh40wZ2o9zuT3ZQ",
  }),
  endpoints: (builder) => ({
    getTrendingVideos: builder.query({
      query: () =>
        `videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=50&key=AIzaSyBG9vS1AxPoHcskKMxDQh40wZ2o9zuT3ZQ`,
    }),
    getVideoCategories: builder.query({
      query: () => ({
        url: "videoCategories",
        params: {
          part: "snippet",
          regionCode: "US", // You can change this based on your requirement
          key: "AIzaSyBG9vS1AxPoHcskKMxDQh40wZ2o9zuT3ZQ",
        },
      }),
    }),
  }),
});

export const { useGetTrendingVideosQuery, useGetVideoCategoriesQuery } =
  videosApi;
