import * as React from "react";
import { ReactSVG } from "react-svg";
import back from "../../../assets/icons/light/back-button.svg";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import "../../../App.css";
import "./BreathExercisesPage.css";
import anxiety from "../../../assets/luna/anxiety.png";
import anger from "../../../assets/luna/anger.png";
import irritation from "../../../assets/luna/frustrated.png";
import sadness from "../../../assets/luna/despair.png";
import mindfulness from "../../../assets/luna/meditate.png";
import worry from "../../../assets/luna/concern.png";

function BreathExercisesPage() {
  return (
    <div className="container">
      <div className="breath">
        <div className="breath-1">
          <Link to="/exercises" className="back-link">
            <ReactSVG src={back} alt="mood" />
          </Link>

          <div>What would you like help with today?</div>
        </div>

        <div className="breath-2">
          <div className="breath-card">
            <div className="card-1">
              Anxiety <div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={anxiety} className="mini-luna" />
              </Link>
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Anger <div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={anger} className="mini-luna" />
              </Link>
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Irritation <div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={irritation} className="mini-luna" />
              </Link>
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Sadness<div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={sadness} className="mini-luna" />
              </Link>
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Mindfulness <div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={mindfulness} className="mini-luna" />
              </Link>
            </div>
          </div>

          <div className="breath-card">
            <div className="card-1">
              Worry <div>3min</div>
            </div>

            <div className="card-2">
              <Link className="link" to="/follow-the-breath">
                <img src={worry} className="mini-luna" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BreathExercisesPage;
