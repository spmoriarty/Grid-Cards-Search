import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
// import { FormButton } from '../Forms/FormControls';
import { search } from '../../services/pokedex.js';

export default function Search() {
  const {
    infiniteScrollRef,
    // nextPage,
    searchResults,
  } = useSearchResults();


  return <section>
    <SearchForm 
      onSubmit={search} />
    <SearchResults results={searchResults} 
      infiniteScrollRef={infiniteScrollRef}/> 
    {/* <FormButton onClick={nextPage}>next</FormButton>  */}
  </section>;
}
