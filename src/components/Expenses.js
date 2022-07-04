import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {
  // console.log(props.items);
  return (
    <div>
      <h2>Let's get started!</h2>
      <Card className="expenses">
        {props.items.map((expenses, idx, array) => (
          <ExpenseItem
            key={idx}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

// {/* <ExpenseItem
//     title={expenses[0].title}
//     amount={expenses[0].amount}
//     date={expenses[0].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[1].title}
//     amount={expenses[1].amount}
//     date={expenses[1].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[2].title}
//     amount={expenses[2].amount}
//     date={expenses[2].date}
//   ></ExpenseItem>
//   <ExpenseItem
//     title={expenses[3].title}
//     amount={expenses[3].amount}
//     date={expenses[3].date}
//   ></ExpenseItem> */}
