import React, { useContext } from "react";
// import { AppContext } from "../Context/AppContext";
import { Context } from "../Context/Context";

const Dashboard = () => {
  const { transactionsLists } = useContext(Context);
  console.log(transactionsLists.transactions);
  console.log(transactionsLists.inc);
  console.log(transactionsLists.exp);

  return (
    <div className="m-10 flex flex-col gap-10">
      <div className="bg-white rounded py-2 px-3">
        <p>Income</p>
        <p>{transactionsLists.inc || 0}</p>
      </div>
      <div className="bg-white rounded py-2 px-3">
        <p>Expense</p>
        <p>{transactionsLists.exp || 0}</p>
      </div>
      <div className="bg-white rounded py-2 px-3">
        <p>Balance</p>
        <p>{transactionsLists.inc - transactionsLists.exp}</p>
      </div>
    </div>
  );
};

export default Dashboard;
