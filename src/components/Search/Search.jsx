import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
import { FormButton } from '../Forms/FormControls';


export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    searchPokedex,
    searchResults,
  } = useSearchResults();


  return <section>
    <SearchForm 
      onSubmit={searchPokedex} />
    <SearchResults results={searchResults} 
      infiniteScrollRef={infiniteScrollRef}/> 
    <FormButton onClick={nextPage}>next</FormButton> 
  </section>;
}
