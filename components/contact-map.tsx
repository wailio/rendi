"use client"

export default function ContactMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-[#0B5DA0]/30 w-full aspect-square md:aspect-auto">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12793.79295723246!2d3.066540187158203!3d36.71179470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadbdafc4b31b%3A0xf61ba3d3c1683efd!2sRais%20Meuble!5e0!3m2!1sfr!2sdz!4v1786306193589!5m2!1sfr!2sdz"
        width="100%"
        height="450"
        className="h-full min-h-0 md:h-[450px] aspect-square md:aspect-auto"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
