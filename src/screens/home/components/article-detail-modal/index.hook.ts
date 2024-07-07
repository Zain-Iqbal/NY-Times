import {useDispatch, useSelector} from "react-redux";

import {articleStateSelector} from "../../../../selectors/main-selector";
import {setArticleDetail} from "../../../../features/main-slice";
import useTheme from "../../../../theme/useThemeContext.hook";
const useArticleDetailModal = () => {
    const dispatch = useDispatch()
    const {isDark} = useTheme()
    const articleDetail = useSelector(articleStateSelector)
    const {
        title = '',
        media,
        abstract = '',
        des_facet = [],
        url = '',
        published_date = '',
        byline = ''
    } = articleDetail || {}
    const {caption = '', ['media-metadata']: mediaData = []} = !!media && !!media.length ? media[0] : {}

    const resetDetail = () => {
        dispatch(setArticleDetail(null))
    }

    const navigationHandler = () => {
        window.open(url, '_blank')
    }

    return {
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
        hasData: !!articleDetail
    }
}

export default useArticleDetailModal
