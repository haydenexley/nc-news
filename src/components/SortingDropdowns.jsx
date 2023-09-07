const SortingDropdowns = ({searchParams, setSearchParams}) => {

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setSearchParams((prevParams) => {
            prevParams.set(key, value)
        })
        setSearchParams(searchParams)
      };

  return <>
  <label htmlFor="sort_by">Sort by:</label>
  <select name='sort_by'  onChange={handleChange}>
    <option name='created_at' value='created_at' key='created_at'>date created</option>
    <option name='comment_count' value='comment_count' key='comment_count'>controversial</option>
    <option name='votes' value='votes' key='votes'>popular</option>
  </select>
  <label htmlFor="order">Order by:</label>
  <select name='order' onChange={handleChange}>
  <option name='desc' value='desc' key='desc'>descending</option>
    <option name='asc' value='asc' key='asc'>ascending</option>
  </select>
</>
}

export default SortingDropdowns
