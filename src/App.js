import {useState} from "react"//4-1.스테이트를 가져오는 리액트의 훅. 이제 app으로 내려가기.
import './App.css';
import Box from "./component/Box"

//선생님 로직.
//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위바위보 버튼 3개 
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임>onclick>우리가 실행시키고픈 함수play를 {}에 담은 후, app안에 만들기
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다(중요point: ui를 바꾸게 할 때는 state를 만들어야한다.)
//5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다. 
//6. 승패결과에 따라 테두리색이 변경(지면-빨강, 이기면-초록색, 비기면-검은색)

const choice = {//바뀌지 x const, 초이스에 어떤게 있는지, 객체를 만들어본다.쉼표필수.
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspdMSmR1PkRteqqzSeUdgo3yNMudkJ3oHqw&s",
  },
  scissor:{
    name:"Scissor",
    img:"https://images.unsplash.com/photo-1567034923558-600a5edab1d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaXNzb3IlMjB3aGl0ZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YkrnYMQ5-2SIpN-8INd0jdbJ11OTM60YPA&s",
  }
}
function App() {
  //4-2. 새로운 변수 생성. [상태, 변화하는 수] 처음에는 어떤 값인지 모르니 null
  const [userSelect, setUserSelect] = useState (null)//4-3. state에 있는 값이 변할 때 마다, ui가 변할 예정. 
  //4-4. 이제 우리가 해줘야하는 것은 useSelect에 값은 바꿔줘야 한다. 내가 선택한 값으로!>>play함수로 go

  const play = (userChoice) => {
    console.log("선택 됨!", userChoice)
    //3-1. 여기까지, onclick이 동작함, but 내가 무엇을 선택했는지는 나오지x
    //3-2.매개변수를 {play}안에 ()만들어서, 넣어줘야 함>play 함수가 매개변수를 ()에 받아야한다.
    //3-3.but 모든 매개변수가 미리 표시되어있을 것, 
    //3-4.이건, 리액트가 '실행될 때' ui가 그려져야하는데, 함수가 들어가있으면 바로 실행을 시켜버림. 
    //3-5.play()가 함수를 실행시키는 명령어 자체이기 때문에,
    //3-6.따라서, 이 함수를 콜백하는 것처럼 함수'안에'넣어줘야한다. ()=>play() 이런식으로.
    //3-7.그래야 클릭될 때야 비로소 하나씩, 실행된다. 리액트할 때 주의해야할 점 중 하나. 
    //3-8.정리! onClick할 때엔 함수를 호출하는게 x, 함수를 전달하는 형식이어야한다.

    //4-5.초이스에서 아이템을 가져와야한다. 주의 할점은, 변수에 값 바꾸는 것 처럼 하면 x
    //4-6. userSelect = 쓰지말고, ()써서 state를 바꿔주는 set함수를 사용하기. 
    setUserSelect(choice[userChoice])
    //4-7. 이제 버튼에다가 넘겨줄 것. 가서 item = {userSelect}내가 선택한 값은 이것이다. 아이템에게 알려주기.
    //4-8. 이제 아이템을 이용하면 됨. box.js 가기
  }

  return (
    <div>
      <div class="main">
        <Box title="YOU" item = {userSelect}/>
        {/* <Box title="COMPUTER"/> */}
      </div>
      <div class="main two">
        <button onClick = {() => play("scissor")}>가위</button>
        <button onClick = {() => play("rock")}>바위</button>
        <button onClick = {() => play("paper")}>보</button>
    </div>
  </div>
  );
}

export default App;
