import react from 'react'
import { MdSearch } from 'react-icons/md';

const Search = ({ setsearchText }) => {

    // Update searchText state when the input value changes
    const HandleSearch = (event) => {
        setsearchText(event.target.value);
    }

    return <div className='search'>
        <MdSearch className='search-icon' size='1.3em' />
        <input onChange={HandleSearch} type='text' placeholder='Type to search'></input>
    </div>
}

export default Search;