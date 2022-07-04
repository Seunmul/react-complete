import React from 'react'
import './Card.css'
//사용자 지정 wrapper container
function Card(props) {
    const classes = 'card ' + props.className;
    //사용자 지정 컴포넌트에서 외부 className을 지정하기 위한 설정
    //상수 문자열을 도입함으로써 classes를 통해 className 전달
    //whitespaces 꼭 확인할 것. -> css 문법
  return (
    <div className={classes}>{props.children}</div>
    // childern props는 예약된 속성값으로 
    // 사용자 지정 컴포넌트로 둘러쌓인 하위 컴포넌트들을 불러온다
  )
}

export default Card