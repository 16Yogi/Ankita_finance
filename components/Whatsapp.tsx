import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  const phoneNumber = "9111832196"; // country code + number
  const message = "Hello, I want to chat with you!";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <aside
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "100px",
        backgroundColor: "#25D366",
        color: "#fff",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000
      }}
      role="button"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </aside>
  );
}
