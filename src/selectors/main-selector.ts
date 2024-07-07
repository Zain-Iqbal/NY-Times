import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

const articleState = (state: RootState) => state.main.articleDetail
export const articleStateSelector = createSelector(articleState, val => val)

