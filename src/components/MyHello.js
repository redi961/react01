import './My.css'

export default function MyHello(probs) {
  // 함수를 작성하는 위치
  //console.log(probs.name)
  console.log(probs);

 return (
  //JSX에서는 class 선택자는 반드시 className으로 만들어야함
  //div -> h1,h2
  <div className = "divHello">
    <h1>Hello React!!</h1>
      <h2>
        {/*조건부 랜더링*/}
        <span className = 'spanHello'> {probs.name} </span>
        <span className = 'numHello'> {probs.num % 2 === 1 ? "홀수" : "짝수"} </span>
        <span className = 'spanHello'>{probs.ck  || '🤔'}</span>
        <span className = 'spanHello'>{probs.ck ? '👍' : '😜'}</span>
      </h2>
  </div>
 );
}

// export default Mycom;
