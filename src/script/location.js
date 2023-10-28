import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarkerIcon from "../../public/icons/marker.svg";

const map = L.map("map", { attributionControl: false }).setView(
  [30.391799720263787, -9.478511961375869],
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

const customIcon = L.divIcon({
  className: "custom-marker",
  html: `<img class="custom-marker" src="../../public/icons/marker.svg"  />`,
  iconAnchor: [40, 40],
});
const marker = L.marker([30.391799720263787, -9.478511961375869], {
  icon: customIcon,
}).addTo(map);
const popupContent = '<div class="custom-popup">Lion Park</div>';

marker.bindPopup(popupContent);
