import './My.module.css'
// 해당시트에 사용할 스타일 시트의 정의
import style from '../App.module.css'

function Mycom() {
 return (
  <>
     <h1>스타일 변경예제</h1>
     {/*각 컴포넌트에 서로 다른 스타일 시트 적용 */}
     <p className={style.p1}>스타일 시트</p>
  </>
 );
}

export default Mycom;
