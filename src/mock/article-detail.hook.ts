import {Mock_Article_Detail, Mock_Article_List} from "./constants";

const mockArticleDetailModal = () => {
    const{ title = '',
        media,
        abstract = '',
        des_facet = [],
        url = '',
        published_date = '',
        byline = ''
    } = Mock_Article_Detail
    const {caption = '', ['media-metadata']: mediaData = []} = !!media && !!media.length ? media[0] : {}

    return {
        resetDetail: ()=>{},
        navigationHandler:()=>{},
        isDark: false,
        title,
        abstract,
        des_facet,
        published_date,
        byline,
        caption,
        mediaData,
        hasData: true
    }
}

export default mockArticleDetailModal
