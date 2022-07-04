import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div className="expense-date">
        {/* {props.date.toISOString()} */}
        {/* new Date 객체이므로 toISOString()메소드를 이용해 str로 변환 */}
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
