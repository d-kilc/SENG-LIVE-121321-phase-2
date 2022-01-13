export default function SearchBar({handleSearch}) {
    return(
        <>
            <h2>Search</h2>
            <input onChange={handleSearch}></input>
            <button>Submit</button>
        </>
    )
}