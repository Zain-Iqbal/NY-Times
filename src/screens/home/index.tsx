import React from "react";

import HomeCard from "../../shared-components/home-card";
import HomeCardLoading from "../../shared-components/home-card/card-loading";
import ArticleDetailModal from "./components/article-detail-modal";
import DropDown from "../../shared-components/drop-down";
import useHome from "./index.hook";
import {Days_List, View_Type_List} from "../../utils/constants";

import './styles.scss'

const Home = () => {
     const {days, setDays,listType, setListType, isFetching, results, isError} = useHome()
    return <div className={'home-container'}>
        <h1>Most Popular Articles</h1>

        <div className={'drop-down-container'}>
            <DropDown val={days} setVal={setDays} label={'Days'} list={Days_List}/>
            <DropDown val={listType} setVal={setListType} label={'Article Type'} list={View_Type_List}/>
        </div>

        <div className={'cards-container'}>
            {isFetching && <HomeCardLoading/>}
            {!isFetching && results?.map((item) => <HomeCard key={item.id} item={item}/>)}
        </div>
        {isError &&<div className={'error-wrapper'}>
            <i className="fa-solid fa-triangle-exclamation"/>
            Something Went Wrong
        </div>}

        <ArticleDetailModal/>
    </div>
}

export default Home
