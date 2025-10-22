import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg"
      />
      <img
        className="food-img"
        src="https://panlasangpinoy.com/wp-content/uploads/2025/03/How-to-cook-Caldereta.jpg"
      />
      <img
        className="food-img"
        src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b-14.jpg"
      />
      <img src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
className = "food-img";
