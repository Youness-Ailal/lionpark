import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

const picker = new Pikaday({
  field: document.getElementById("datepicker"),
  bound: false,
});
