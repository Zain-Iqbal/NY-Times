import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const DropDown = (props) => {
    const {val, setVal, list=[], label=''} = props
    const onChangeVal = (e) => {
        const value = e.target.value
        setVal(value)
    }

    return <FormControl className={'dropdown'} fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={label}
            value={val}
            onChange={onChangeVal}
        >
            {list.map(item => (<MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>))}
        </Select>
    </FormControl>
}

export default DropDown
