import  {useState} from "react";
import { Days_List, View_Type_List } from "../utils/constants";
import {Mock_Article_List} from "./constants";


const useHome = () => {
    const [days, setDays] = useState(Days_List[0].id)
    const [listType, setListType] = useState(View_Type_List[0].id)

    return {days, setDays,listType, setListType, isFetching:false, results: Mock_Article_List, isError:false}
}

export default useHome
