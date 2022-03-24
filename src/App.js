/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

    let [name, setName] = useState(['여자 코트 추천', '강남 우동 맛집', '재밌는 코딩시간']);
    let [zero, setZero] = useState([0, 0, 0]);
    let [num, setNum] = useState(0);

    let [modal, setModal] = useState(false); // 모달창을 켜고 닫는 스위치   리액트에서 ul를 만들때 state를 이용한다.

    let [text, setText] = useState('');

    // function exUl(){   var array = [];   for (var i = 0; i < 3; i++){
    // array.push(<div>안녕!</div>);   }   return array } => 또 다른 반복문 사용방법

    function change() {
        var newChange = [...name];
        newChange.unshift(text);
        setName(newChange)
    }

    // function change(){   setName (['남자 코트 추천', '강남 우동 맛집','재밌는 코딩시간']); } state는
    // 값의 일부는 변경불가, 전체 통으로만 변경이 가능하다. function change2() {     var newChange =
    // [...name];     newChange.sort();     setName(newChange) state는 값을 전체만 바꿀수 있고
    // 일부만 수정이 불가함으로, 변수를 새롭게 만들어 사용해야한다. [...abc] => deep copy 할수 있다. (기존의 []를 없애고
    // 새롭게 []만들어 가져옴으로, 기존의 배열이아닌 새로운배열을 만든다.) }

    return (
        <div className="App">
            {/* <button onClick={change2}>정렬연습</button> */}
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {
                name.map((a, i) => { //a는 name 어레이 안에 있던 모든 자료를 하나씩 출력해주는 역할, i는 0,1,2 와같이 숫자를 
                    return (

                        <div className="list" key={i}>
                            <h3
                                onClick={() => {
                                    setNum(i)
                                }}>{a} 
                                <span
                                    onClick={() => {
                                        let best = [...zero];//👍 배열 새롭게 복사해와서 변수 담은 다음, 
                                        best[i]++;          //각 배열 i만큼 반복해서 더해줌으로써, 👍 개별카운트 생성.
                                        setZero(best)
                                    }}>👍</span>{zero[i]}</h3>
                            <p>2월 18일 발행</p>
                            <hr/>
                        </div>

                    )
                })
            }

        {/* <button onClick={()=>{setNum(0)}}>버튼1</button>
        <button onClick={()=>{setNum(1)}}>버튼2</button>
        <button onClick={()=>{setNum(2)}}>버튼3</button> */
            }

            {/* { exUl()} => 또 다른 반복문 사용방법 */}

            <div className="publish">
                <input
                    onChange={(e) => {
                        setText(e.target.value) //e.target은 특정 이벤트가 발생하는 태그를 가르킨다
                    }}/>
                <button onClick={change}>저장</button>
            </div>

            <button
                onClick={() => { // state에 저장해둔 modal값이 true일때 modal state값을 false로 변경하고, false일때 true로 
                    modal === true // 변경하여 modal값 창이 열렸다 닫혔다 할수있도록 한다.
                        ? setModal(false)
                        : setModal(true)
                }}>OPEN</button>

            {
                modal === true
                    ? <Modal name={name} num={num}/> // name을 현재 map함수로 돌리고 있기때문에 num(name의 index번호)값도
                    : null                           // 같이 지정해주어야 값이 노출된다.
            }

            {/* <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button> 
      {                           // ! 연산자도 사용가능
         modal === true
         ? <Modal />
         : null
      } */
            }

        </div>
    )
}

function Modal(props) { //컴포넌트
    return (
        <div className="modal">
            <h2>{props.name[props.num]}</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
    //<></> Fragments=>div를 사용하지않고 요소들을 모두 묶을수있다.
}

export default App;
