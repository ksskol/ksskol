import React from "react";
import data from "../../data.json";

export default function Contact() {
  const { contacts } = data;

  return (
    <div className="flex space-x-8 mt-5">
      {contacts.map((contact) => (
        <div key={contact.id}>
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:duration-300 ${
              contact.title === "linkedin" ? "hover:text-blue-500" : ""
            } ${contact.title === "github" ? "hover:text-gray-500" : ""} ${
              contact.title === "email" ? "hover:text-red-500" : ""
            }`}
          >
            <span className="flex items-center">{contact.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
