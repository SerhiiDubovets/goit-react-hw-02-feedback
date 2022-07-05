import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";

class Feedback extends React.Component{
   
   state = {
      valueGood: 0,
      valueNeutral: 0,
      valueBad: 0,
   }
   
   handleIncrementGood = () => {
      this.setState(prev => ({
         
         valueGood: prev.valueGood + 1,
      }))
   }
   
   handleIncrementNeutral = () => {
      this.setState(prev =>({
         valueNeutral: prev.valueNeutral + 1 ,
      }))
   }
   
   handleIncrementBad = () => {
      this.setState(prev =>({
         valueBad: prev.valueBad + 1,
      }))
   }
   
   // можно так
   //    handleIncrementBad = () => {
      // this.setState((prev) =>{
         //    return{
            //       valueBad: prev.valueBad + 1,
            // }
            // })
            //    }        

   // countTotalFeedback () {
   //    return this.state.valueGood + this.state.valueNeutral + this.state.valueBad 
   
   // }
   
   countTotalFeedback () {
return Object.values(this.state).reduce((total, item) => total + item, 0) 
   
   }
            
   countPositiveFeedbackPercentage  () {
      return  Math.round((this.state.valueGood / this.countTotalFeedback ()) * 100)
   }
            
            render(){

               const total = this.countTotalFeedback ();
               const positive = this.countPositiveFeedbackPercentage  ()

            return(
               <div>
   <h1>Please leave feedback</h1>

   <Controls 
      onIncrementGood={this.handleIncrementGood} 
      onIncrementNeutral={this.handleIncrementNeutral}
      onIncrementBad={this.handleIncrementBad}
      onCountTotalFeedback={this.countTotalFeedback}
   />

   <Statistics 
      valueGood={this.state.valueGood} 
      valueNeutral={this.state.valueNeutral} 
      valueBad={this.state.valueBad} 
      totalValue={total}
      positive={positive}
   />
   </div>
      )
   }
}

export default Feedback