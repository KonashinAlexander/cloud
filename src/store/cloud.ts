import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cloudApi = createApi({
    reducerPath: 'cloudApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru/content/v1/' }),
    endpoints: (builder) => ({
        getCloudByName: builder.query({
            query: () => ({ url: `bootcamp/frontend` }),
        }),
        sendForm: builder.mutation({
            query: (form) => ({
                url: `bootcamp/frontend`,
                method: 'POST',
                form,
            })
        })
    })
});

export const { useGetCloudByNameQuery, useSendFormMutation } = cloudApi