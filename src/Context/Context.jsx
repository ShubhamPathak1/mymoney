import { createContext, useReducer } from "react";

export const Context = createContext();

localStorage.clear();

const currTransactionsLists = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  dateTransactions: JSON.parse(localStorage.getItem("datetransactions")) || [],
  catTransactions: JSON.parse(localStorage.getItem("cattransactions")) || [],
  incexpTransactions:
    JSON.parse(localStorage.getItem("incexptransactions")) || [],
  exp: JSON.parse(localStorage.getItem("exp")),
  inc: JSON.parse(localStorage.getItem("inc")),
};

const reducer = (currTransactionsLists, action) => {
  let newTransactionsLists = currTransactionsLists;
  if (action.type === "addT") {
    newTransactionsLists.transactions = [
      action.payload.inpTransaction,
      ...newTransactionsLists.transactions,
    ];
  }
  //   console.log(newTransactionsLists);
  //   console.log(newTransactionsLists.transactions);

  newTransactionsLists.dateTransactions =
    newTransactionsLists.transactions.reduce((acc, transaction) => {
      const date = transaction.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    }, {});
  newTransactionsLists.catTransactions =
    newTransactionsLists.transactions.reduce((acc, transaction) => {
      const cat = transaction.category;
      if (!acc[cat]) {
        acc[cat] = [];
      }
      acc[cat].push(transaction);
      return acc;
    }, {});
  //   newTransactionsLists.incexpTransactions =
  //     newTransactionsLists.transactions.reduce((acc, transaction) => {
  //       const incExp = transaction.exp;
  //       if (!acc[incExp]) {
  //         acc[incExp] = [];
  //       }
  //       acc[incExp].push(transaction);
  //       return acc;
  //     }, {});

  //   newTransactionsLists.exp = Object.values(
  //     newTransactionsLists.incexpTransactions.true
  //   ).reduce((acc, curr) => acc + curr.amount, 0);
  //   newTransactionsLists.inc = Object.values(
  //     newTransactionsLists.incexpTransactions.false
  //   ).reduce((acc, curr) => acc + curr.amount, 0);
  newTransactionsLists.incexpTransactions =
    newTransactionsLists.transactions.reduce(
      (acc, transaction) => {
        const incExp = transaction.exp;
        if (!acc[incExp]) {
          acc[incExp] = [];
        }
        acc[incExp].push(transaction);
        return acc;
      },
      { true: [], false: [] }
    ); // Ensure both true and false keys are initialized

  // Calculate exp and inc
  newTransactionsLists.exp = Object.values(
    newTransactionsLists.incexpTransactions.true || {}
  ).reduce((acc, curr) => acc + curr.amount, 0);
  newTransactionsLists.inc = Object.values(
    newTransactionsLists.incexpTransactions.false || {}
  ).reduce((acc, curr) => acc + curr.amount, 0);

  localStorage.setItem(
    "transactions",
    JSON.stringify(newTransactionsLists.transactions)
  );
  localStorage.setItem(
    "datetransactions",
    JSON.stringify(newTransactionsLists.dateTransactions)
  );
  localStorage.setItem(
    "cattransactions",
    JSON.stringify(newTransactionsLists.catTransactions)
  );
  localStorage.setItem(
    "incexptransactions",
    JSON.stringify(newTransactionsLists.incexpTransactions)
  );
  localStorage.setItem("exp", JSON.stringify(newTransactionsLists.exp));
  localStorage.setItem("inc", JSON.stringify(newTransactionsLists.inc));

  return newTransactionsLists;
};

const ContextProvider = (props) => {
  const incomeCategory = [
    "salary",
    "investments",
    "pocket-money",
    "bonus",
    "others",
    "part-time",
  ];
  const expenseCategory = [
    "transportation",
    "education",
    "food",
    "travel",
    "health",
    "entertainment",
    "clothing",
    "others",
  ];

  const [transactionsLists, dispatch] = useReducer(
    reducer,
    currTransactionsLists
  );

  const addTransaction = (inpTransaction) => {
    dispatch({
      type: "addT",
      payload: { inpTransaction },
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          incomeCategory,
          expenseCategory,
          transactionsLists,
          addTransaction,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
