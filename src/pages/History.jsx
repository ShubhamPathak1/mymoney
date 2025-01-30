import React from "react";
import { useContext } from "react";
// import { AppContext } from "../Context/AppContext";
import { Context } from "../Context/Context";

/*
{
  '01/30/2025': [
    {
      tid: '345ljd',
      exp: true,
      category: 'transport',
      amount: 7000,
      remarks: 'visit',
      date: '01/30/2025'
    },
    {
      tid: '341ljd',
      exp: true,
      category: 'food',
      amount: 65,
      remarks: 'canteen',
      date: '01/30/2025'
    },
    {
      tid: '105djd',
      exp: false,
      category: 'pocket-money',
      amount: 3000,
      remarks: 'pocket',
      date: '01/30/2025'
    }
  ],
  '01/25/2025': [
    {
      tid: '345djd',
      exp: false,
      category: 'salary',
      amount: 50000,
      remarks: 'salary',
      date: '01/25/2025'
    }
  ],
  '01/29/2025': [
    {
      tid: '310djd',
      exp: true,
      category: 'food',
      amount: 65,
      remarks: 'canteen',
      date: '01/29/2025'
    }
  ]
}
*/

const History = () => {
  //   const { dategroupedTransactions } = useContext(AppContext);
  //   console.log(dategroupedTransactions);

  const { transactionsLists } = useContext(Context);
  const dategroupedTransactions = transactionsLists.dateTransactions;
  //   console.log(dategroupedTransactions);

  const sortedTransactions = Object.entries(dategroupedTransactions)
    .sort(([date1], [date2]) => new Date(date2) - new Date(date1))
    .reduce((sorted, [date, dategroupedTransactions]) => {
      sorted[date] = dategroupedTransactions;
      return sorted;
    }, {});

  //   console.log(sortedTransactions);

  return (
    <div className="mt-2 mx-3">
      {Object.keys(sortedTransactions).map((tdate, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between items-center bg-amber-200 rounded px-4 ">
            <p className="">
              {new Date(tdate).getDate()}{" "}
              {new Date(tdate).toLocaleString("en-US", { month: "short" })}
            </p>
            <p>
              {new Date(tdate).toLocaleString("en-US", { weekday: "short" })}
            </p>
          </div>
          {sortedTransactions[tdate].map((tra, i) => (
            <div
              key={i}
              className="bg-white rounded flex justify-between px-3 py-1"
            >
              <p>{tra.remarks}</p>
              <p>{tra.exp ? -tra.amount : `+${tra.amount}`}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
