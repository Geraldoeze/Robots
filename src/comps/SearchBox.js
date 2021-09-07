import '../containers/App.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return ( 
        <div class = "Box">
         <input type ='search' placeholder = 'search'
         onChange = { searchChange } />
        
        </div>
     );
}
 
export default SearchBox;