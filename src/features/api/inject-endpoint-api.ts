import {apiSlice} from './index'
export const endpoint_List = {
    articles: `/svc/mostpopular/v2/`,
}
export const injectEndpointApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getArticleList: builder.query({
            query: (data) => ({
                url: `${endpoint_List.articles}${data.type}/${data.days}.json?api-key=${process.env.REACT_APP_API_KEY}`,
                method: 'GET',
            }),
        }),
    }),
})
export const {
    useGetArticleListQuery
} = injectEndpointApi

