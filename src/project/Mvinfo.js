import mv from '../jsondata/mvInfo.json'
// import './kvstyle.css';

function MvInfo(probs) {

    // Json 데이터 가져오기
    const mvinfo = mv.movieInfoResult.movieInfo;
    console.log(mvinfo);
  
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
    console.log(myinfo)
  
    //화면에 출력할 내용을 JSX로 만들기
    let lis = [] ;

    for (let [k, v] of Object.entries(myinfo)) {
      lis.push(<li className = "lists" key = {myinfo.movieCd + k}> <span>{k} : </span>{v}</li>);
    }

  return (
    <>
    <h1>영화상세</h1>
    <ul>
     <div className = "disP">
      {lis}
      </div>
    </ul>
    
    </>
  );
} export default MvInfo