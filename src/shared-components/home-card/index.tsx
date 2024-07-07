import React from "react";
import moment from "moment/moment";
import LazyLoad from 'react-lazyload';

import {setArticleDetail} from "../../features/main-slice";
import {useAppDispatch} from "../../hooks/redux.hook";

import './styles.scss'
const HomeCard = (props) => {
    const dispatch = useAppDispatch()
    const {item} = props
    const {media} = item || {}
    const list = !!media && !!media.length ? media[0]['media-metadata'] : []
    const detail_card = () => {
        dispatch(setArticleDetail(item))
    }

    return <div className={'card'} onClick={detail_card}>
        <LazyLoad>
        <img className={'image'} src={list[2]?.url || '/assets/no_image.png'} alt={'Article image section'}/>
        </LazyLoad>
        <div className={'text-container'}>
            <p className={'title'}>{item.title}</p>
            <p className={'description'}>{item.abstract}</p>
        </div>
        <p className={'published'}>
            {moment(item.published_date, "YYYY-MM-DD").format("DD MMM YYYY")}
        </p>
    </div>
}

export default HomeCard
