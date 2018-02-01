import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function gebi(id) {
	return document.getElementById(id);
}

const Render = C => {
	return ReactDOM.render(<C/>, gebi('root'));
}

class Hello extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Hello React</h1>
  }
}

Render(Hello);


// adding few lines here 
