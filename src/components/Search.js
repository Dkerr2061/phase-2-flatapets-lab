function Search({searchText, onSearch}){

    return (
        <div className="searchbar" >
            <label htmlFor="search">Search Pets:</label>
            <input onChange={onSearch}
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searchText}
            />
        </div>
    )
}

export default Search;