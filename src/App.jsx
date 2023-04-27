import { useState } from "react";
import Card from "./Card";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-8 bg-gradient-to-r from-sky-300 to-sky-600">
      <Card
        title="Console"
        description="PS4 joystick."
        image={img1}
        colors="green"
      />
      <Card
        title="Console"
        description="Game Boy Color."
        image={img2}
        colors="#eb2b2b"
      />
      <Card
        title="Console"
        description="Xbox joystick."
        image={img3}
        colors="#eba428"
      />
    </div>
  );
}

export default App;
