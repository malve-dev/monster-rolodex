import './App.css';
import React,{Component} from 'react';
import {CardList} from './components/card-list/cardList';
import {Search} from './components/search-box/search.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters : [
       
      ],
      search : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      response.json().then(response => this.setState({monsters : response}))
    })
  }
  render(){
    const {monsters, search} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return(
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search placeholder = 'Search Monster' onChangeHandler = {(e) => this.setState({search : e.target.value}) }/>
      <CardList monsters = {filteredMonster}></CardList> 
    </div>
    );
  }
}

export default App;
