import { Textfit } from 'react-textfit';
import "./Screen.css";

const Screen = ({ screenSendValue }) => {

    return (
        <Textfit mode="single" className="screen" max={50}>
            {screenSendValue.result ? <span>{`(${screenSendValue.result})`}</span> : ""}&nbsp;
            {screenSendValue.calc || "0"}
        </Textfit>
    );
};

export default Screen;

//Textfit library has to modes : single and multi. single mode is first arrange the width but if forceSingleModeWidth=false the text overflows its also fit the elements height too. And the multi mode is the exact opposite its first arrange height than text still overflows its fitting the width too.
