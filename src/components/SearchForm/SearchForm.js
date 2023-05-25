import { useState } from 'react';

export const SearchForm = ({setQuery, handleSearch}) => {
    const [queryValue, setQueryValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setQueryValue(newValue);
    setQuery(newValue);
}

    return (
        <div>
        <h1>Search Form</h1>
        <form onSubmit={(e)=>handleSearch(e)}>
          <input
            type="text"
            placeholder="Enter email or phone number"
            value={queryValue}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    )
}