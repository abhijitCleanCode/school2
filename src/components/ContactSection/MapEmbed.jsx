import map from "../ContactSection/mapp.png";

export function MapEmbed() {
  const iframeSrc = "https://www.google.com/maps/embed?pb=...";

  return (
    <div className="mt-8 md:mt-12">
      <iframe
        src={iframeSrc}
        className="rounded-lg w-full h-[335px] md:h-[533px] max-w-[1176px] object-cover"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        onError={(e) => {
          // Hide iframe and show fallback
          e.target.style.display = "none";
          document.getElementById("map-fallback").style.display = "block";
        }}
      />
      {/* Fallback image */}
      <img
        id="map-fallback"
        src={map}
        className="rounded-lg h-[335px] md:h-[533px] w-full max-w-[1176px] object-cover"
        alt="Map"
        style={{ display: "none" }} // Hidden by default
      />
    </div>
  );
}
