import "./Digits.css";

const Digits = ({ digSendValue }) => {
    const createDigits = () => {

        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button className="btnDigits" key={i} onClick={() => digSendValue.updateCalc(i.toString())} >{i}</button>
            )
        };
        return digits;
    }
    return (
        <div className="digits">
            {createDigits()}
            <button className="btnDigits" onClick={() => digSendValue.updateCalc("0")}>0</button>
            <button className="btnDigits" onClick={() => digSendValue.updateCalc(".")}>.</button>

            <button className="btnDigits" onClick={digSendValue.calculate} >=</button>
        </div>

    );
};

export default Digits;