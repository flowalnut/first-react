import React from 'react'

const Box = (props) => {
  console.log("props", props)//4-9. 프롭스 값이 잘 나오는지 확인
  //4-10. item이라는 객체를 컴퓨터에게 넘기지 않은 상황. useSelect에게만 있음.>>잠시 computer커멘드처리하기.
  //4-11. useSelect값은 유저가 버튼 선택해야 값이 들어감. 처음값은 null. 박스 입장에선 그리긴 그려야하는데 아이템이x 상황. 
  //4-12. 에러 고치려면, props.item && 입력. 이것을 가드라고 함.null은 false가 자동리턴되기 때문.
  //4-13. props.item이 실행되지 못하면 뒤의  props.item.img도 실행 x. 
  //4-14. 유저가 넘겨준 아이템값이 있으면, true가 되면서 뒤의 아이템의 이미지값도 불러오게 됨. 리액트는 가드값을 넣어줘야한다.
  //4-15. useSelect는 다이나믹한 값. 내가 선택하기 전까지는 null임. 아예 값이 없는 것. 따라서 상황에 맞춰서 에러 방지위해 가드 넣어줘야함. 
  return (
    <div>
      <div class="Box">
        <h1>{props.title}</h1>
        <img class="item_img" src={props.item && props.item.img}/>
        <h2>WIN</h2>
      </div>
    </div>
  )
}

export default Box
