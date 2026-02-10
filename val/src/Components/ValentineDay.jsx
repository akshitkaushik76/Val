import { useNavigate } from "react-router-dom";
import "./day.css";

export default function ValentineDay(){
  const navigate = useNavigate();

  return (
    <div className="day-page">

      <h1 className="day-title">Happy Valentine ❤️</h1>

      <div className="name">Vidushi</div>

      <div className="message">
        Maybe the distance exists.
        Maybe the timing is wrong.
        Maybe life is complicated.

        But feelings don’t really care about logic.

        I don’t know if our paths will merge forever,
        but I know this 
        loving you was never a mistake.

        And if someday life gives me a chance,
        I would still choose you again.
        WOULD U BE MY VALENTINE FOR LIFE
      </div>

      <button className="back-btn" onClick={()=>navigate("/")}>
        Return to beginning
      </button>

    </div>
  );
}
