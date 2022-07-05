import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//Satteless componenets : 상태관리를 하지 않는 컴포넌트
const ExpenseItem = (props) => {
  // console.log(props);
  // const[title, setTitle]=useState(props.title);
  // const clickHandler = () => {
  //   console.log("Clicked");
  //   setTitle('Updated');
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* //JSX요소를 이용한 이벤트 핸들러 */}
      {/* <button
        onClick={clickHandler}
        // onClick={()=>clickHandler()} 
        // 이러한 방식을 사용할 시 JSX코드가 분석되면서 한번 실행된다
        // 너무 이르다 => 함수명만 기입해서 포인팅만 하자 그러면 클릭 시에만 실행
      >
        Change Title
      </button> */}
    </Card>
    // 사용자 지정 컴포넌트로 Wrapper 역할을 하는 컴포넌트를 생성할 수는 없다.
    // 또한 사용자 지정 컴포넌트에 className을 통한 css 속성값을 전달하더라도
    // 기존에 사용자 지정 컴포넌트에 기입된 속성값만 적용된다.
  );
};

export default ExpenseItem;
