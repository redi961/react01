//import logo from './logo.svg';
import './App.css';
import mv from './jsondata/mvInfo.json'
import MvInfo from './project/Mvinfo';
import MyObject from './MyObject';


function App() { 
  const mvinfo = mv.movieInfoResult.movieInfo;
  return (
    <>
      <MyObject/>
    </>
  );
}

export default App;
