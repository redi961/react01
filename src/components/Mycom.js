import './My.css'
// 해당시트에 사용할 스타일 시트의 정의
import style from '../App.module.css'

function Mycom() {
   //object 생성
   let obj = new Object() ;
   console.log('object 생성 1 ', obj)

   //object 생성2
   let obj2 = {} ;
   console.log('object 생성 2 ', obj2);

   //object 생성3
   let mv = {
      "rnum": 1,
      "rank": 1,
      "rankInten": 0,
      "rankOldAndNew": "OLD",
      "movieCd": "20215601",
      "movieNm": "공조2: 인터내셔날",
      "openDt": "2022-09-07",
      "salesAmt": "1131000202",
      "salesShare": 26.8,
      "salesInten": 504943991,
      "salesChange": 80.7,
      "salesAcc": "61003624386",
      "audiCnt": "107515",
      "audiInten": "44621",
      "audiChange": "70.9",
      "audiAcc": "5946412",
      "scrnCnt": "1210",
      "showCnt": "3992"
    }
/*     console.log('object 생성 3', mv)
    console.log('영화명 : ', mv.movieNm )
    console.log('영화명 : ', mv['movieNm']) */

    //Object 순회
     for(let k in mv) {
      console.log(k, '=>', mv[k]);
      if (k==='movieNm') break
    } 

    //Object 순회 2
    console.log("============");
    for(let [k,v] of Object.entries(mv)) {
      console.log (k, '=>', v)
      if (k==='movieNm') break
    }

    //얕은 복사
    obj = mv;
    

    //깊은 복사
    obj2 = {...mv};
    

    //mv 오브젝트 내용 변경
    mv.movieNm = '공조2';
    console.log(" 얕은 복사 : " , obj)
    console.log(" 깊은 복사 (전개 연산자...사용) : ", obj2)

    let lis = [];
    for (let [k,v] of Object.entries(mv)) {
      lis.push(
    <li key = {k}>
      <span className = "mvLik"> {k} </span>
      <span className = "mvLiv"> {v} </span>
    </li>)
    }


 return (
  <>
   <h1>Object 타입 연습 </h1>
    <ul>{lis}</ul>
  </>
 );
}

export default Mycom;
