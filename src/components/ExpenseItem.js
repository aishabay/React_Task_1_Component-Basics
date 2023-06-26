import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({date, title, amount}) {
//   const expenseDate = new Date(2023, 7, 22);
//   const expenseTitle = "Car insurance";
//   const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      {/* <div>{date.toISOString()}</div> */}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
