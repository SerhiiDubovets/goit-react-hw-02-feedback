import React from "react";

const Statistics = ({valueGood, valueNeutral, valueBad, totalValue, positive}) => {
   return <div>
   <h2>Statistics</h2>
   <p>Good:
      <span>{valueGood}</span>
   </p>
   <p>Neutral:
      <span>{valueNeutral}</span>
   </p>
   <p>Bad:
      <span>{valueBad}</span>
   </p>
   <p>Total:
      <span>{totalValue}</span>
   </p>
   <p>Positive feedback:
      <span>{positive}</span>
   </p>
  </div>
}

export default Statistics;