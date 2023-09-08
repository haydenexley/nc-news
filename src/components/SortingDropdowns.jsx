import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SortingDropdowns = ({searchParams, setSearchParams}) => {
  const [sortBy, setSortBy] = useState('created_at')
  const [orderBy, setOrderBy] = useState('desc')

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setSearchParams((prevParams) => {
            prevParams.set(key, value)
        })
        setSearchParams(searchParams)
        if (key === 'sort_by') setSortBy(value)
        if (key === 'order') setOrderBy(value)
      };

  return <>
  <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select
          label="sort_by" value ={sortBy}name="sort_by" id="sort_by" onChange={handleChange}
        >
          <MenuItem value='created_at' key='created_at'>date created</MenuItem>
          <MenuItem value='comment_count' key='comment_count'>controversial</MenuItem>
          <MenuItem value='votes' key='votes'>popular</MenuItem>
        </Select>
      </FormControl>
  
      <FormControl fullWidth>
        <InputLabel>Order By</InputLabel>
        <Select
          label="order by" value ={orderBy} name="order" id="order" onChange={handleChange}
        >
          <MenuItem value='desc' key='desc'>descending</MenuItem>
          <MenuItem value='asc' key='asc'>ascending</MenuItem>
        </Select>
      </FormControl>
</>
}

export default SortingDropdowns
