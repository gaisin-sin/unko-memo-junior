import "./Card.css"
export const Card = (props) => {
    const {memo, onClick, index } = props;
    const memo_lst = memo.split("\n");

    console.log("MEM" + memo);
    return (
        <div className="Card" onClick={() => onClick(index)}>
            {memo_lst.map((texts) => {
                 
                    return (
                        <>
                        {texts}
                        <br></br>
                        </>
                    );
            })}
        </div>
    );
}