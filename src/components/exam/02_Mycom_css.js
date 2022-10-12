import './My_css.css'
import MyHello from '../MyHello';
// 화살표 함수로 저장 가능
//const Mycom = () => {

// export defaul인 경우 funtiuon 앞에 넣을수 있음
// export default function Mycom() {

//기본 Funtion 형
function Mycom () {
  // 스타일 오브젝트를 만들어서 사용
  const styleObj = {
    color:'white',
    backgroundColor:'green',
    padding:'6px',
    textAlign:'center'
  }

 return (
  <>
      <h1>스타일 변경 예제</h1>
      {/*인라인 스타일은 object 타입으로
         바깥 {}는 JSX의 표현식을 위한 {}이고
         안쪽 {}는 자바스크립트의 object 타입 표시 
        */}

      <p style = {{
      color : 'red', 
      backgroundColor : 'black', 
      padding : '5px',
      textAlign : 'center'
      }}>
        리액트에서 스타일 변경 - 인라인 형식 
      </p>
      {/* 스타일 Object 변수 선언 */}
      <p style ={styleObj}>
        리액트에서 스타일 변경 - 인라인 형식으로 변수 사용 - Obj 함수
      </p>
      {/*주변에 있는 가장 가까운 스타일을 참조하여 사용하며 이를 카스케이딩 이라고 한다
      -> 주로 사용하는 방식은 CSS를 통한 적용*/}
      <p>리액트에서 스타일 변경 - CSS 파일 적용</p>
    </>
 );
}

export default Mycom;
