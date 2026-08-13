"use client"

export default function MapContent() {
  return (
    <div
      className="overflow-hidden shadow-lg border-0 sticky top-20 z-40 w-full h-56 md:h-96"
      style={{ 
        borderLeft: "3px solid #0B5DA0",
        borderRight: "3px solid #0B5DA0",
        minHeight: "400px"
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12794.02476811095!2d3.064934187158203!3d36.71040250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fada914385a93%3A0xbdfa983b7f25f22f!2sRais Meuble%20shop!5e0!3m2!1sfr!2sdz!4v1782514243901!5m2!1sfr!2sdz"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
