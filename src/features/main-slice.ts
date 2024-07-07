import {createSlice} from '@reduxjs/toolkit'

import {IMainSlice} from "../interface";


const initialSate: IMainSlice = {
    articleDetail: null
}

export const detailSlice = createSlice({
    name: 'mainSlice',
    initialState: initialSate,
    reducers: {
        setArticleDetail: (state, action) => {
            state.articleDetail = action.payload
        },
    },

})

export const {
    setArticleDetail,
} = detailSlice.actions

export default detailSlice.reducer
