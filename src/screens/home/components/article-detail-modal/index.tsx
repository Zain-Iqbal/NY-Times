import React from "react";
import moment from "moment";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Tags from "../../../../shared-components/tags";
import useArticleDetailModal from "./index.hook";

import './styles.scss'
const ArticleDetailModal = () => {
    const {
        resetDetail,
            navigationHandler,
            isDark,
            title,
            abstract,
            des_facet,
            published_date,
            byline,
            caption,
            mediaData,
        hasData
    } = useArticleDetailModal()

    return hasData ?
        <Modal
            open={hasData}
            onClose={resetDetail}
            className={'content-container'}
        >
            <Box className={`${isDark ? 'is-dark' : ''} content-container-inner`}>
                <div className={'header'}>
                    <p>{title}</p>
                    <i className="fa-solid fa-circle-xmark" onClick={resetDetail}/>
                </div>
                <p className={'publish'}>
                    <b>Published date: </b>{moment(published_date, "YYYY-MM-DD").format("DD MMM YYYY")}</p>
                <div className={'text-container'}>
                    <img className={'image'} src={mediaData[2]?.url || '/assets/no_image.png'}
                         alt={'Article image section'}/>
                    <div>
                        <p className={'description'}>{abstract}</p>
                        <Tags list={des_facet}/>
                        {!!byline && <p className={'description'}><b>{byline}</b></p>}
                        {!!caption && <p className={'description'}><b>Media Caption: </b>{caption}</p>}
                        <Button className={'btn'} variant="outlined" onClick={navigationHandler}>View Article</Button>
                    </div>
                </div>
            </Box>
        </Modal> : null
}

export default ArticleDetailModal
