import React from 'react'

const Box = (props) => {
  console.log("props", props)//4-9. 프롭스 값이 잘 나오는지 확인
  //4-10. item이라는 객체를 컴퓨터에게 넘기지 않은 상황. useSelect에게만 있음.>>잠시 computer커멘드처리하기.
  //4-11. useSelect값은 유저가 버튼 선택해야 값이 들어감. 처음값은 null. 박스 입장에선 그리긴 그려야하는데 아이템이x 상황. 
  //4-12. 에러 고치려면, props.item && 입력. 이것을 가드라고 함.null은 false가 자동리턴되기 때문.
  //4-13. props.item이 실행되지 못하면 뒤의  props.item.img도 실행 x. 
  //4-14. 유저가 넘겨준 아이템값이 있으면, true가 되면서 뒤의 아이템의 이미지값도 불러오게 됨. 리액트는 가드값을 넣어줘야한다.
  //4-15. useSelect는 다이나믹한 값. 내가 선택하기 전까지는 null임. 아예 값이 없는 것. 따라서 상황에 맞춰서 에러 방지위해 가드 넣어줘야함.
  //4-16. 이제 컴퓨터를 위한 ui를 시작해야한다. app.js로 이동! 

  //숙제1. 이기고 지고 반대로 하는 것. 
  //숙제2. 승패 결과에따라 테두리 색이 달라지는 것.
  let result; 

  if(
    props.title === "COMPUTER" &&
    props.result !== "tie" &&
    props.result !== "" ) { //만약 카드 타이틀일 경우, 비기지 않았을경우, 비어있지 않을 경우.
      result = props.result === "win" ? "lose" : "win"; //아래 저지먼트값으로 result가 win일경우 컴퓨터 카드값은 lose, 아니면 win이 된다.
    } else {
      result = props.result; //위의 경우가 아니라면, 전달된 결과 그대로를 쓴다.
    }

    let img = props.item
    ? props.item.img
    : "https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTNGfGVufDB8fDB8fHww"

  return (
    <div class="main_box">
      <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <figure><img className="item_img" src={img}/></figure>
        <h2>{result}</h2>
      </div>
    </div>
  )
}

export default Box
