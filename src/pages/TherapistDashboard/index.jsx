import { useContext, useState } from "react";
import axios from "axios";
import { Button, Input } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { TherapistAuthContext } from "../../context/therapistAuth.context";

function TherapistDashboard() {

  const { logOutTherapist } = useContext(TherapistAuthContext);
  return (
    <div>
      <nav>
        <Button onClick={logOutTherapist}>Logout</Button>
      </nav>
      <div>
        <h1>Profile</h1>
        <p>Welcome back (username).</p>
      </div>
      <div>
        <button>Edit Profile Info</button>
      </div>
    </div>
  );
}

export default TherapistDashboard;
