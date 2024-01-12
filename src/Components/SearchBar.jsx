import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="searchSection">
        {/* the target says to open a new tab/window and the action tells it where */}
        <form className="searchForm" action="http://google.com/search" target="_blank">
          <div className="searchBar">
            {/* the "q" here clarifies that whatever is entered into the input tag becomes what is searched in google */}
            <input className="searchBarInput" name="q" placeholder="Search" autoComplete="off"></input>
            {/* this submits the search prompting the action */}
            <button className="searchButton" type="submit"><FaSearch /></button>
          </div>
        </form>
    </section>
  )
}

export default SearchBar