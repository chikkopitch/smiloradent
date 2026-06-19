import React from "react";

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Complident",
    "image": "https://complident.example.com/logo.png",
    "@id": "",
    "url": "https://complident.example.com",
    "telephone": "+74951234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Ленина, д. 45, БЦ 'Премиум', 1 этаж",
      "addressLocality": "Москва",
      "postalCode": "100001",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.7532204,
      "longitude": 37.6152912
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
