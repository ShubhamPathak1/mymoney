import React, { useContext, useRef, useState } from "react";
// import { AppContext } from "../Context/AppContext";
import { v4 as uuid } from "uuid";
import { Context } from "../Context/Context";

const AddTransaction = () => {
  const { incomeCategory, expenseCategory, addTransaction } =
    useContext(Context);

  const [expChecked, setexpChecked] = useState(true);

  const expCat = useRef();
  const incCat = useRef();
  const amountInp = useRef();
  const remarksInp = useRef();
  const dateInp = useRef();

  const formSubmit = (event) => {
    event.preventDefault();

    let moneyInp = {
      tid: uuid().slice(0, 6),
      exp: expChecked,
      category: expChecked ? expCat.current.value : incCat.current.value,
      amount: Number(amountInp.current.value),
      remarks: remarksInp.current.value,
      date: dateInp.current.value,
    };
    addTransaction(moneyInp);

    amountInp.current.value = "";
    remarksInp.current.value = "";
    dateInp.current.value = "";
  };

  return (
    <div className="mt-5 mx-5">
      <form className="flex flex-col gap-5 " onSubmit={formSubmit}>
        <div className="w-full flex items-center justify-between sm:justify-center sm:gap-10 ">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="incExp"
              id="expense"
              value="expense"
              defaultChecked
              onClick={() => setexpChecked(true)}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Expense
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="incExp"
              id="income"
              value="income"
              onClick={() => setexpChecked(false)}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Income
            </label>
          </div>
        </div>
        <div>
          {expChecked && (
            <select
              name="expCategory"
              id="expCategory"
              className="border-1 rounded w-full h-10 px-3"
              ref={expCat}
            >
              {expenseCategory.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          )}
          {!expChecked && (
            <select
              name="incCategory"
              id="incCategory"
              className="border-1 rounded w-full h-10 px-3"
              ref={incCat}
            >
              {incomeCategory.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          )}
        </div>
        <div>
          <input
            type="number"
            name="amount"
            id="amount"
            className="border-1 rounded w-full h-10 p-3"
            placeholder="Amount"
            required
            ref={amountInp}
          />
        </div>
        <div>
          <input
            type="text"
            name="remarks"
            id="remarks"
            className="border-1 rounded w-full h-10 p-3"
            placeholder="Enter a note..."
            required
            ref={remarksInp}
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            id="date"
            ref={dateInp}
            required
            className="border-1 rounded w-full h-10 p-3"
          />
        </div>
        <div>
          <button
            type="submit"
            className="rounded w-full px-10 h-10 bg-blue-500 text-white text-2xl font-semibold"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
