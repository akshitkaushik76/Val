import { useNavigate } from "react-router-dom";
import "./day.css";

export default function RoseDay(){
  const navigate = useNavigate();

  return (
    <div className="day-page">

      <h1 className="day-title">Rose Day 🌹</h1>

      <div className="name">Hey Vidushi</div>

      <div className="message">
        If I could, I would give you a real rose today.
        But flowers eventually fade…
        so instead I’m giving you something that won’t.

        Every time you smile, my entire day fixes itself.
        I don’t know what we are in the future,
        but I know one thing 
        meeting you was never a coincidence for me.
        Usko kya hi gulaab do jo khud gulaab ho.
      </div>

      <button className="back-btn" onClick={()=>navigate("/")}>
        Back to our story
      </button>

    </div>
  );
}

