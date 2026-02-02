import React from "react";

const ChildMemo = React.memo(() => {
// React.Memo ni component-iig sanah oid hadgalj baina nogoo memoize 
// React.memo(() => { ... }) ene component ymr ch props awdaggvi dangaaraa static component
// Parent render hiisen ch ChildMemo render hiihgvi
  console.log("✅ ChildMemo rendered");
// Component render vyd l garch irne


  return <p>Child Component</p>;
});

export default ChildMemo;


// React.Memo baihgvi vyd Parent bvrd render hiine