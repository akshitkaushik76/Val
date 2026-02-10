import { useNavigate } from "react-router-dom";
import "./day.css";

export default function ProposeDay(){
  const navigate = useNavigate();

  return (
    <div className="day-page">

      <h1 className="day-title">Propose Day 💍</h1>

      <div className="name">Vidushi…</div>

      <div className="message">
        I’m not promising a perfect life.

        I’m not promising late night talks,
        I'am promising random arguments,
        stupid jokes,
        and a person who will never stop choosing you.

        I don’t know where life will take us,
        but if someday you look beside you
        and see me standing there,
        I would consider my life successful.
        So… will you be mine?
      </div>

      <button className="back-btn" onClick={()=>navigate("/")}>
        Back
      </button>

    </div>
  );
}
