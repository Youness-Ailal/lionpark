// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import customMarkerIcon from "../../public/icons/marker.svg";

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      try {
        import("leaflet/dist/leaflet.css");
        import("leaflet").then(L => {
          const map = L.map("map", {
            scrollWheelZoom: false,
            attributionControl: false,
          }).setView([30.391799720263787, -9.478511961375869], 14);

          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);

          const customIcon = L.divIcon({
            className: "custom-marker",
            html: `<div class="custom-marker" >.</div>`,
            iconAnchor: [30, 30],
          });
          const marker = L.marker([30.391799720263787, -9.478511961375869], {
            icon: customIcon,
          }).addTo(map);
          const popupContent = '<div class="custom-popup">Lion Park</div>';

          marker.bindPopup(popupContent);
        });
      } catch (err) {
        console.log(
          "error while Loading leaflet Map , please refresh the page - Youness"
        );
      }
    }
  }
});

observer.observe(document.getElementById("map"));
