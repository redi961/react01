import './My.css'
import MyHello from '../MyHello';
// 화살표 함수로 저장 가능
//const Mycom = () => {

// export defaul인 경우 funtiuon 앞에 넣을수 있음
// export default function Mycom() {

//기본 Funtion 형
function Mycom () {
 return (
   <div>
    <>
    {/* 속성값을 만들수 있음 =>
        Myhello 컴포넌트에서 probs 매개변수(object type)에 전달 */}
      <MyHello name = "PNU" num ="1" ck = ""/>
      <MyHello name = "K-digital" num ="2" ck = "1"/>
      <MyHello name = "부산대학교" num ="3" ck = ""/>
    </>
  </div>
 );
}

export default Mycom;
