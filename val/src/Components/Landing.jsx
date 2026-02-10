import CardSwap, { Card } from "./CardSwap";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

    return (
   
   <div className="landing-container">

      {/* LEFT SIDE → CARDS */}
      <div className="cards-area">
        <CardSwap
          cardDistance={70}
          verticalDistance={70}
          delay={4000}
        >
          <Card onClick={()=>navigate("/rose")}>
            <h3>Rose Day 🌹</h3>
            <p>A flower for you, because you make my life bloom.</p>
          </Card>

          <Card onClick={()=>navigate("/propose")}>
            <h3>Propose Day 💍</h3>
            <p>I don’t know the future, but I want you in all of mine.</p>
          </Card>

          <Card onClick={()=>navigate("/chocolate")}>
            <h3>Chocolate Day 🍫</h3>
            <p>Sweet things exist… but you’re still sweeter.</p>
          </Card>
          
          <Card onClick={()=>navigate("/valentine")}>
  <h3>Valentine Day ❤️</h3>
  <p>
    Maybe the world is big, the future is uncertain,
    but one thing I know… I choose you, today and every day.
  </p>
</Card>


        </CardSwap>
      </div>

      {/* RIGHT SIDE → TEXT */}
      <div className="header-overlay">
  <div className="love-text">
    <h1 className="title">Happy Valentine 💖</h1>

    <p className="subtitle">
      I made something for you…
      Walk through this little journey with me.
    </p>
  </div>
</div>

    </div>
  );
}
