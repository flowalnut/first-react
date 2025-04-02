import {useState} from "react"//4-1.스테이트를 가져오는 리액트의 훅. 이제 app으로 내려가기.
import './App.css';
import Box from "./component/Box"



//선생님 로직.
//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위바위보 버튼 3개 
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임>onclick>우리가 실행시키고픈 함수play를 {}에 담은 후, app안에 만들기
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다(중요point: ui를 바꾸게 할 때는 state를 만들어야한다.)
//5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다. 나는 내가선택한값/컴퓨터가선택한값을 알 수 있따. 승패를 보여주는 state를 만들어야함.go app()
//6. 승패결과에 따라 테두리색이 변경(지면-빨강, 이기면-초록색, 비기면-검은색)


 //4-22. 객체를 배열화 시작할 것임. randomChoice로go. 

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

  //4-17.컴퓨터를 위한 ui>>state를 만들어줘야한다. 그리고 이 컴퓨터셀렉트는 어디서 보여줄까?>> 밑의 <Box />에서! (커멘드 풀어주기) 이제 컴퓨터에도 아이템속성이 들어감.
  const [computerSelect, setComputerSelect] = useState (null)
  //4-18. 이제 유저가 선택할 '때', 컴퓨터가 랜덤한 값을 선택하도록 만들어야한다. 그 순간이 언제인가? play () 함수!play함수 안에서 컴퓨터가 값을 랜덤하게 선택하도록 할것임.   

  const [result, setResult] = useState ("") //5-1. 여기에는 비어있는 스트링타입을 넣어준다. > result의 값을 밑의 <Box />에 보내준다.
  //5-2. Box.js컴포넌트로 돌아가 WIN대신 다이나믹한 값인 props.result로 바꾸기>play함수에서 세팅해줘야함 go


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


    //4-19. 컴퓨터가 랜덤하게 값을 선택한다는 함수를 만들어주자. 
    let computerChoice = randomChoice() //랜덤초이스의 결과값이 컴퓨터초이스에 담긴다. //4-29.randomChoice가 리턴이 되면서 컴퓨터초이스에 들어가게된다.
    setComputerSelect(computerChoice) 
    //4-30.setComputerSelect. computerItem을 초기화 시켜줄게요라는 뜻.>무엇으로?computerChoice의 값으로...
    //주의! randomChoice()가 이미 choice 객체 중 하나를 리턴하므로, choice[computerChoice]를 다시 접근할 필요는 없다! 4끝.

    //5-3.판단하는 함수 만들기. 두가지값(유저가선택한 값/컴퓨터가 선택한 값)
    setResult(judgement(choice[userChoice], computerChoice));
    //5-7.setResult()에 judgment의 리턴값judgement(choice[userChoice], computerChoice);을 넣어줄 수 있다.
    //5-8. 그러나 지금 user입장에서 쓰인 함수만 있기 때문에 유저가 이겼는지 졌는지만 나오는 상황.
    
  }



    //5-4.이제 함수를 만들고, 두개의 매개변수 이름입력. 
  const judgement = (user, computer) => {
    console.log("유저", user, "computer", computer)
    //5-5. 이제부터 로직을 생각해보기
    //유저 == 컴퓨터 tie
    //유저 == 바위, 컴퓨터 == 가위  유저가 이김
    //유저 == 바위, 컴퓨터 == 보    유저가 짐
    //유저 == 가위, 컴퓨터 == 보    유저가 이김
    //유저 == 가위, 컴퓨터 == 바위  유저가 짐
    //유저 == 보,   컴퓨터 == 바위  유저가 이김
    //유저 == 보,   컴퓨터 == 가위   유저가 짐
    //오브젝트 안에서 name만 가지고 비교시작해야한다.삼항연산식 사용.
    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") 
      return computer.name === "Scissor"? "win" : "lose"
    else if (user.name === "Scissor") 
      return computer.name === "Paper"? "win" : "lose"
    else if (user.name === "Paper") 
      return computer.name === "Rock"? "win" : "lose"
    //5-6.이제 const judgment가 스트링값을 리턴하게 되었다. judgement함수로 go.
  }


    //4-20. 이제 랜덤초이스라는 함수를 만들어야 함. 랜덤으로 초이스하게 어떻게 할까?
    /*
    4-21. Math.random 0~1사이 값 랜덤으로 추출. 이걸 어떻게 choice랑 연결할 것인가.
          우린 숫자만 가져올 수 o. 아이템과 숫자를 연결짓는 방법=배열.
          배열에 아이템이 들어가있으면 > 아이템 각각에 인덱스 자동 부여가 됨. [item, item, item] = [0, 1, 2]
          인덱스 번호 = 숫자. >> math.random을 통해서 가져올 수 o. 
          이 값을 통해서 choice아래에있는 갖고올 수 o. choice로 이동!
    */
  
  const randomChoice = () => {
    //4-23. Object.keys >> 배열화하는 중.. >> 객체(Rock, Scissor, Paper)에서 키값만 뽑아서 어레이로 만들어주는 함수. 
    //4-24. 어레이에는 인덱스 번호가 o > 인덱스 번호 0,1,2중에 하나만 랜덤으로 받아오면 됨. 
    let itemArray = Object.keys(choice);
    console.log("아이템어레이는", itemArray)

    //4-25. 랜덤함수에 *itemArray.length; 곱해주고, 소수점 제거 >> 0, 1, 2가 나오게 될 것. 
    let randomItem = Math.floor(Math.random()*itemArray.length)
    console.log("randomItem", randomItem)
    let final = itemArray[randomItem]//4-26.이제 파이널 값을 담을 변수 만들고 > 아이템 어레이에 랜덤아이템의 인덱스 번호 받은것을 넣어준다.
    console.log("final은",final)//4-27.이제 인덱스 번호에 맞춰서 아이템이 반환이 된다.

    return choice[final];//4-28.리턴이 되면서 위의 컴퓨터초이스에 들어가게된다. go!
  }

  return (
    <div>
      <div class="main">
        <Box title="YOU" item = {userSelect} result = {result}/>
        <Box title="COMPUTER" item = {computerSelect} result = {result}/>
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
