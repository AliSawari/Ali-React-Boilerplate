import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Render = C => {
	return ReactDOM.render(<C/>, document.getElementById('root'));
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
