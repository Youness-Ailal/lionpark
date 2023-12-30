import { useState } from "react";
import "../styles/Feeding.scss";
import ring from "../../public/icons/bell-ring.svg";
const IMAGE_BASE_URL =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_450/lionpark-swipers";
const IMAGE_BASE_URL_LOW =
  "https://res.cloudinary.com/ddi3hd3cx/image/upload/w_20/lionpark-swipers";

const feedingToday = [
  {
    time: "10:00",
    name: "Lioness",
    index: 1,
  },
  {
    time: "12:00",
    name: "Cheetah",
    index: 2,
  },
  {
    time: "12:30",
    name: "Serval",
    index: 3,
  },

  {
    time: "14:00",
    name: "White lion",
    index: 4,
  },
  {
    time: "14:30",
    name: "Black tiger",
    index: 5,
  },
  {
    time: "16:00",
    name: "Bengal tiger",
    index: 6,
  },
];
const feedingTomorrow = [
  {
    time: "9:30",
    name: "African Lion",
    index: 8,
  },
  {
    time: "11:00",
    name: "Jaguar",
    index: 9,
  },
  {
    time: "12:00",
    name: "Lion Cub",
    index: 7,
  },
  {
    time: "13:30",
    name: "Siberian Tiger",
    index: 6,
  },
  {
    time: "14:30",
    name: "Leopard",
    index: 5,
  },
  {
    time: "16:00",
    name: "Black Panther",
    index: 4,
  },
];

export default function Feeding() {
  const [day, setDay] = useState("today");
  const dayFeeding = day === "today" ? feedingToday : feedingTomorrow;
  return (
    <section className="feeding">
      <div className="container feeding__container">
        <div className="feeding__left">
          <h2 className="heading-second feeding__title">Feeding Schedule</h2>
          <h3 className="heading-third feeding__title2">
            Get up close with our animals during feeding sessions
          </h3>
          <p className="paragraph feeding__text">
            Our animals choose between strolling in plain view of visitors or
            seeking shelter. Join a feeding session for a guaranteed opportunity
            to see your favorite animals. Watch our dedicated staff nourish the
            Arctic fox, fox, bearded seal, and other enclosure residents. Our
            knowledgeable keepers will share captivating stories about these
            incredible creatures.
            <br />
            <br />
            Don't miss out – pick a date and arrive promptly!
          </p>
          <a className="cta feeding__cta" href="/Tickets">
            Pick up a Date
          </a>
        </div>
        <div className="feeding__right">
          <div className="feeding__right--top">
            <button
              onClick={() => setDay("today")}
              className={`select-btn-bg feeding__select ${
                day === "today" && "selected"
              }`}>
              Today
            </button>
            <button
              onClick={() => setDay("tomorrow")}
              className={`select-btn-bg feeding__select ${
                day === "tomorrow" && "selected"
              }`}>
              Tomorrow
            </button>
            <a href="#sub" className="feeding__sub">
              Subscribe
              <img
                src={ring.src}
                alt="bell ring"
                className="icon feeding__icon"
              />
            </a>
          </div>
          <div className="feeding__right--bottom">
            {dayFeeding.map((item, index) => (
              <div key={index} className="feeding__card">
                <img
                  src={`${IMAGE_BASE_URL}/swiper_${item.index + 1}.jpg`}
                  alt={item.name}
                />
                <p className="feeding__time">{item.time}</p>
                <p className="feeding__name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
