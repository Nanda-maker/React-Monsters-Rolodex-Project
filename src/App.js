//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'; 
//import logo from './logo.svg';
import './App.css';

const App = ()=>{

  const [searchField, setSearchField] = useState('');  //[value, setValue]
  const [monsters,setMosters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  //console.log(searchField);

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.json())
  .then((users)=> setMosters(users));
  },[]);
  
useEffect(()=>{
  const newFilteredMonster = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilterMonsters(newFilteredMonster);

},[monsters,searchField]);
  const onSearchChange = (event)=>{
      //console.log(event.target.value);
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };


    
  return(
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
     <SearchBox 
     className='monsters-search-box'
     onChangeHandler={onSearchChange} 
     placeholder='search monsters'/>
  
     <CardList monsters={filteredMonsters}/>
   </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state =
//     {
//     // {
//     //   name:{fisrtName:'Nanda', lastName:'Kumar'},
//     //   company:'ZTM'
//     // }
//     //Array
//     // monsters : [
//     //   {
//     //     name:'Linda',
//     //     id:'123edc'
//     //   },
//     //   {
//     //     name:'Frank',
//     //     id:'234rfd'
//     //   },
//     //   {
//     //     name:'Jacky',
//     //     id:'345rtgf'
//     //   },
//     //   {
//     //     name:'Andrei',
//     //     id:'432dfgh'
//     //   }
//     // ]
//     monsters : [],
//     searchField:''
//   };
//  // console.log('constructor');
// }

// componentDidMount(){
//   //console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response)=> response.json())
//   .then((users)=> this.setState(()=>{
//     return {monsters:users};
//   },
//   ()=>{
//     console.log(this.state);
//   }
//   ))
// }

// onSearchChange = (event)=>{
//   //console.log(event.target.value);
//   const searchField = event.target.value.toLocaleLowerCase();
  
//   this.setState(()=>{
//     return {searchField};
//   });
// };
//   render (){
//     //console.log('render');
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonster = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//        <h1 className='app-title'>Monsters Rolodex</h1>
//         {/* {
//           filteredMonster.map((monster)=>{
//             return <div key={monster.id}><h1>{monster.name}</h1></div>;
//           })
//         } */}
//         <SearchBox 
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange} 
//         placeholder='search monsters'/>
//         <CardList monsters={filteredMonster}/>
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.fisrtName} {this.state.name.lastName}, I work at {this.state.company}
//           </p>
//           <button onClick={() =>{
//             this.setState(()=>{
//               return{name:{fisrtName:'Bhuwan', lastName:'Gurung'}}
//             })
//           }}>Change Name</button>
//         </header> */}
        
//       </div>
//     );
//   }
  
// }

export default App;
