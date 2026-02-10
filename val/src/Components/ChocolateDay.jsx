import { useNavigate } from "react-router-dom";
import "./day.css";

export default function ChocolateDay(){
  const navigate = useNavigate();

  return (
    <div className="day-page">

      <h1 className="day-title">Chocolate Day 🍫</h1>

      <div className="name">Hey Vidushi</div>

      <div className="message">
        People say chocolates are sweet,
        but they’ve clearly never heard you laugh.

        Some people come in life for a reason,
        some for a season…
        and then there are people
        who slowly become a habit.

        You became my favorite habit.
        Vaise kit kat khaa khaa ke motiii aurat mat ban jaana
      </div>

      <button className="back-btn" onClick={()=>navigate("/")}>
        Back
      </button>

    </div>
  );
}
