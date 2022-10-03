import styles from './Search.css';

export default function SearchResultCard({ pokemon, infiniteScrollRef }) {

  return <li className = {styles.SearchResultCard} ref = {infiniteScrollRef}>
    {pokemon.pokemon}
    <img src={pokemon.url_image}/>
  </li>;
}
