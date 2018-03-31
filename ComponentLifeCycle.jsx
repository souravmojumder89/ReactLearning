import React from 'react';

class ComponentLifeCycle extends React.Component{

constructor(props){
super(props);
this.state = {
         data: 1
      }
this.fn = this.fn.bind(this);
}
componentWillMount(){
console.log("componentWillMount");
}
componentDidMount(){
console.log("componentDidMount");
}

componentWillUpdate(){
this.setState({data:this.state.data+1});
console.log("componentWillUpdate"+this.state.data);
}
componentDidUpdate(){
console.log("componentDidUpdate");
}
fn() {
this.setState({data: this.state.data+1})
}
render(){
console.log("render"+this.state.data);
return (
<div>
<button onClick={this.fn}>test</button>
{this.state.data}
</div>
);
}

}

export default ComponentLifeCycle;