import { useState } from "react";
import Card from "./Card";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-8 bg-gradient-to-r from-sky-300 to-sky-600">
      <Card
        title="Joystick"
        description="PS4 joystick."
        image={img1}
        colors="green"
      />
      <Card
        title="Joystick"
        description="PS4 joystick."
        image={img2}
        colors="red"
      />
      <Card
        title="Joystick"
        description="PS4 joystick."
        image={img3}
        colors="pink"
      />
    </div>
  );
}

export default App;
