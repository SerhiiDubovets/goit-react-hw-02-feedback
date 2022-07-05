import React, { Component } from "react";
import Feedback from "./feedback/feedback";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0  
  }
  render(){
    return (
      <div>
        <Feedback 
          good={this.state.good} 
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
