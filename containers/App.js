import React, { Component } from 'react';
import Cardlist from '../comps/cardComponents';
import SearchBox from '../comps/SearchBox';
import './App.css';
import Scroll from '../comps/Scroll';



class App extends Component {
    constructor (){
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
        
    }

    componentDidMount(){
         fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=> response.json())
         .then(users => this.setState({ Robots: users}));
     }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
 
    render() {
        const {Robots, searchfield } = this.state
        const filterRobot = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length ? 
                    <h1>Loading...</h1> :
            (    
                    <div class = "All">
                        <h1> RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                        <Cardlist robots ={filterRobot}/> 
                        </Scroll>
                    </div>
            );
            
    }
}
 
export default App;
     