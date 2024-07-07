import  {useState} from "react";

import {useGetArticleListQuery} from "../../features/api/inject-endpoint-api";
import {Days_List, View_Type_List} from "../../utils/constants";

const useHome = () => {
    const [days, setDays] = useState(Days_List[0].id)
    const [listType, setListType] = useState(View_Type_List[0].id)
    const {data, isFetching, isError} = useGetArticleListQuery({days, type: listType}, {refetchOnMountOrArgChange: true})
    const {results = []} = data || {}

    return {days, setDays,listType, setListType, isFetching, results, isError}
}

export default useHome
