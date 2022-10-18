import mv from '../jsondata/mvInfo.json'
import MvTimer from './mvTimer';
import './kvstyle.css';

//useState Hook
import {useState, useEffect} from 'react';

function MvInfo(probs) {

    // Json 데이터 가져오기
    const mvinfo = mv.movieInfoResult.movieInfo;
    // console.log(mvinfo);
  
    // 화면에 출력할 정보를 오브젝트 생성
    let myinfo ={};
    const key1 = ['movieNm','movieCd','openDt','prdtStatNm','showTm',] 
    const key2 = ['audits', 'nations', 'directors', 'genres','companys']
    const keys = {
      'movieNm' : '영화이름',
      'movieCd' : '영화코드',
      'openDt' : '개봉일',
      'prdtStatNm' : '제작상태',
      'showTm' : '상영시간',
      'audits' : '관람등급',
      'nations' : '제작국가',
      'directors' : '감독',
      'genres' : '장르',
      'companys' : '배급사'

    }

    //key1에 해당하는 값추출
    for(let k of key1) {
      myinfo[keys[k]] = mvinfo[k];
    }

    //key2에 해당하는 값 추출 : 배열에서 추출
    for(let k of key2) {
      switch (k) {
        case 'audits' :
          myinfo[keys[k]] = mvinfo[k].map((item) => item.watchGradeNm);
          break;
        case 'nations' :
          myinfo[keys[k]] = mvinfo[k].map((item) => item.nationNm);
          break;  
        case 'directors' :
          myinfo[keys[k]] = mvinfo[k].map((item) => item.peopleNm);
          break;
        case 'genres' :
          myinfo[keys[k]] = mvinfo[k].map((item) => item.genreNm);
          break;
        case 'companys' :
          mvinfo[k] = mvinfo[k].filter((item) => item.companyPartNm === '배급사');
          myinfo[keys[k]] = mvinfo[k].map((item) => item.companyNm);
          break;  
      }
    }
    // console.log(myinfo)
  
    //화면에 출력할 내용을 JSX로 만들기
    let lis = [] ;

    for (let [k, v] of Object.entries(myinfo)) {
      lis.push(<li className = "lists" key = {myinfo.movieCd + k}> 
      <span className = "mvTitle"> {k} : &nbsp; </span> 
      <span className="mvIndex"> {v} </span></li>);
    }
    /* 변수제어 항목*/
    //count 제어 
    let cntup = 0;
    let cntdown = 0;

    
    //state변수
    // let [수정할변수+st, set수정한별수] -> 일반적으로 사용
    let [cntupSt,setcntUpst] = useState(0);
    let [cntdownSt,setcntDownst] = useState(0);
    let [flag, setflagSt] = useState(true);

    const handleUp = () => {
      // console.log('local 변수 : ' + ++cntup);
      //State의 증감은 반드시 상기의 선언한 함수를 통하여 진행하여야함
      setcntUpst(++cntupSt);
      console.log('state 변수 : ', cntupSt);
    };
    
    const handleDown = () => {
      // console.log(++cntdown);
      setcntDownst(++cntdownSt);
      console.log('state 변수 : ', cntdownSt);
    };

    const ClickTimer = () => {
      setflagSt(!flag);
    //setFlag2(flag2 === 'none'? 'inline-flex' : 'none'); 
    }
    /* 변수제어 항목 */

    // UseEffect Hook : 랜더링시 매번 발생
    useEffect(() => {
      console.log('useEffect 랜더링 발생시 계속 수행');        
    });
    
    // UseEffect Hook : 랜더링시 생성시 한번 발생 ()=>{}, [발생조건]
    useEffect(() => {
      console.log('useEffect 랜더링시 생성시 한번 발생');
    }, []);

    // UseEffect Hook : 관련state변수가 변경될때 실행
    useEffect(() => {
      console.log('useEffect 관련 State 실행으로 발생');      
    }, [cntupSt]);

  return (
    <>
    <h1>영화상세</h1>
    <div className = "mvField" >
    
    <ul>
     <div className = "disP">
      {lis}
      </div>
    </ul>
    
    <div className ='handleField'>
        <div onClick = {handleUp}>💗 </div><div>{cntupSt}</div>
        <div onClick = {handleDown}>🖤 </div><div>{cntdownSt}</div>
        {/*Flag값이 True인경우 표기되며 False의 경우 표기되지 않음 */}
        <div onClick = {ClickTimer} >🕑</div>
        <span className = "mvTimer"> 시간 : {flag && <MvTimer/>}</span>
        {/*span className='mvTimer' style={{'display': fleg2}}><MvTimer/></div>*/}
    </div>
    </div>
    </>
  );
} export default MvInfo