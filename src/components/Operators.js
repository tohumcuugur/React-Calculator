import "./Operators.css";

const Operators = ({ opSendValue }) => {
    return (
        <div className="operators">
            <button className="btnOp" onClick={() => opSendValue.updateCalc("/")}>/</button>
            <button className="btnOp" onClick={() => opSendValue.updateCalc("*")}>*</button>
            <button className="btnOp" onClick={() => opSendValue.updateCalc("+")}>+</button>
            <button className="btnOp" onClick={() => opSendValue.updateCalc("-")}>-</button>

            <button className="btnOp" onClick={opSendValue.deleteLast}>Del</button>

        </div>
    );
};
export default Operators; 