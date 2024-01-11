import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="searchSection">
        {/* the target says to open a new tab/window and the action tells it where */}
        <form className="searchForm" action="http://google.com/search" target="_blank">
            {/* the "q" here clarifies that whatever is entered into the input tag becomes what is searched in google */}
            <input className="searchBar" name="q" placeholder="Search"/>
            {/* this submits the search prompting the action */}
            <button className="searchButton" type="submit"><FaSearch /></button>
        </form>
    </section>
  )
}

export default SearchBar