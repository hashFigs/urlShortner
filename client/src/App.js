

import React, { useState, useEffect } from "react";

//import Table from "./Table";
import "./App.css";

function App() {

  const [urls, setUrls] = useState([{"shortUrl": 'urlstea1'},{"shortUrl": 'urlstea2'}]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/urls')
      const urlsTmp = await response.json() 
      setUrls(urlsTmp);

    })();
  }, []);

  return (
    <>
    <div className="App"></div>
    <h1>Short URL</h1>

    <form >
      <label>
        URL Adress:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </form> 
    <br></br>
    
    {urls.map(url =>
          <div key={url._id}><a href={`${url.originalUrl}`} >{url.shortUrl}</a></div>
          )}

    </>
  );
}

export default App;

/*

http://https//www.mundodeportivo.com/futbol/mundial/20221121/1001897626/motivo-jugadores-iran-cantaron-himno-inglaterra.html

https://www.mundodeportivo.com/futbol/mundial/20221121/1001897626/motivo-jugadores-iran-cantaron-himno-inglaterra.html

*/
/*

import React, { Component } from 'react';
//import { addListener } from '../../server/src/app';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: 'this is a placeholder',
      urls: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUrls = this.fetchUrls.bind(this);
  }  
  
  
  getData(){

  }
  componentDidMount(){
    this.fetchUrls();
  }
  
  handleChange(event) {
    this.setState({url: event.target.value});
  }

  async handleSubmit(event, url) {
    event.preventDefault();

   try{
    await fetch('/urls', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url: this.state.url}),
    });
    }catch(err){
     console.error()
    }
 }
   
 fetchUrls(event){
  console.log('urlsss', this.state.urls)
  fetch('/urls')
    .then(res => res.json())
    .then(urls => this.setState({ urls }));
 }
  


  render() {

    var heading = ['Short Url'];
    var body =
        [['Kapil', 'Jaipur', 'MCA'],
        ['Aakash', 'Hisar', 'Btech'],
        ['Mani', 'Ranchi', 'MSc'],
        ['Yash', 'Udaipur', 'Mtech']
        ];

    return(

      <div className="App">
        <h1>Short URL</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            URL Adress:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> 
         
         
        <button onClick={this.fetchUrls}>
          fetch urls
        </button>
   <br></br>
         










        {heading.map(url =>
          <div key={url}>{url}</div>
        )}
        
        {this.state.urls.map(url =>
          <div key={url._id}>{url.shortUrl}</div>
        )}
        
      </div>
    )
  }
}

export default App;
*/