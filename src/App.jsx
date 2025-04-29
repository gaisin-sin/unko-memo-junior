import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Modal } from "./components/Modal";
import { InputModal } from "./components/InputModal";
export const App = () => {
  const [nowTab, setTab] = useState(0);
  const [tab0, setTab0] = useState("tab-title-click");
  const [tab1, setTab1] = useState("tab-title");
  
  const [memos, setMemos] = useState(["HIII", "II"]);

  const [favs, setFav] = useState([]);


  const [viewMemo, setView] = useState(false);

  const [showInput, setInput] = useState(false);
  
  const [nowMemo, setNow] = useState("");

  const tabChange = (x)  => {
    setTab(x);
    if (x < 1) {
      setTab0("tab-title-click");
      setTab1("tab-title");
    } else {
      setTab0("tab-title");
      setTab1("tab-title-click");
    }
  }

 
   let  showMemo =  nowTab < 1 ? memos : favs;


   useEffect(() => {
   
   }), [nowTab];

  

  const showModal = (id) => {
    setView(true);
    setNow((nowTab < 1 ? memos : favs)[id]);
  }


  const registFav = (memo) => {
    const nowfav = [...favs];
    const newfav = [memo, ...nowfav];
    setFav(newfav);

  }


  const addMemo = (memo) => {
    const nowMemo = [...memos];
    const newMemo = [memo, ...nowMemo];
    setMemos(newMemo);
  }

  return (
    <>
    <InputModal setInput={setInput} showInput={showInput} addMemo={addMemo} />
    <div className="ModalWindow" onClick={() => setView(false)} style={{visibility:(viewMemo ? "visible" : "hidden")}}>
    </div>
    <Modal nowMemo={nowMemo} visible={viewMemo} setView={setView} registFav={registFav}/>
     <div className="App">
      <header>めも　てすと</header>
     <div className="container">
      <div className="Tab">
        <div className={tab0} onClick={() => tabChange(0)}>めも</div>
        <div className={tab1} onClick={() => tabChange(1)}>おきに</div>
      </div>
      <div className="Memo">
        <button onClick={() => setInput(true)}>+メモを追加</button>
        <div className="memo-container">
          {(nowTab < 1 ? memos : favs).map((memo, id) => {
            console.log("NOW showmemo " + memo);
            return (< Card key={id} memo={memo} onClick={showModal} index={id}/>);
          })}
        </div>
      </div>
     </div>
     </div>
    </>
  );
}