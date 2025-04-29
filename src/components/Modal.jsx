import "./Modal.css";
export const Modal = (props) => {
    const {nowMemo, visible, setView, registFav } = props;
    console.log("MODAL " + nowMemo);
    return (
        <>
        <div className="MemoModal"  style={{visibility:(visible ? "visible" : "hidden")}}>
        <div className="MemoShow">
        {nowMemo.split("\n").map((text) => {
        return (
          <>
          {text}
          <br></br>
          </>
        );
      })}
      </div>
      <div className="buttons">
        <button className="close-button" onClick={() => setView(false)}>X</button>
        <button className="fav-button" onClick={() => registFav(nowMemo)}>★</button>    
      </div>
      </div>
        </>
    );
}