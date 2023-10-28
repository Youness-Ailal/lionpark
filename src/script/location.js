import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarkerIcon from "../../public/icons/marker.svg";

const map = L.map("map", { attributionControl: false }).setView(
  [30.39134622128686, -9.478308116643165],
  14
);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);
L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

const customMarker = L.icon({
  iconUrl: "../../public/icons/marker.svg",
  iconSize: [70, 70],
  iconAnchor: [60, 70],
  popupAnchor: [0, -70],
});
const marker = L.marker([30.39134622128686, -9.478308116643165], {
  icon: customMarker,
}).addTo(map);
const popupContent = '<div class="custom-popup">Lion Park</div>';

marker.bindPopup(popupContent);
