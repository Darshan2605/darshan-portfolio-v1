"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaCalendar, FaSchool, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBook, FaChevronDown, FaBriefcase } from "react-icons/fa";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <aside className={`sidebar${showContacts ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/My-image.jpg"
            alt="Darshan Londhe"
            width={120}
            height={120}
            className="sidebar-avatar-img"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Darshan Londhe">Darshan Londhe</h1>
          <p className="title">DevOps Engineer at Emplay Inc (Remote)</p>
        </div>
        <button 
          className="info_more-btn" 
          data-sidebar-btn 
          onClick={() => setShowContacts((v) => !v)}
        >
          <span>{showContacts ? "Hide Contacts" : "Show Contacts"}</span>
          <FaChevronDown className={`chevron-icon ${showContacts ? "rotate" : ""}`} />
        </button>
      </div>
      
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><FaEnvelope /></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:darshanlondhe9@gmail.com" className="contact-link">darshanlondhe9@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaPhone /></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918767883257" className="contact-link">+91 8767883257</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaCalendar /></div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-05-26">May 26, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaSchool /></div>
            <div className="contact-info">
              <p className="contact-title">Education</p>
              <p className="contact-value">BE in Computer Engineering</p>
              <address>AISSMS IOIT, Pune (2021-2025)</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaBriefcase /></div>
            <div className="contact-info">
              <p className="contact-title">Company</p>
              <p className="contact-value">Emplay Inc (Remote)</p>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pune, Maharashtra, India</address>
            </div>
          </li>
        </ul>
        
        <div className="separator"></div>
        
        <div className="social-links-sidebar">
          <a href="https://github.com/darshan2605" className="social-link-item" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darshan-l-035b5a354/" className="social-link-item" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://medium.com/@darshanlondhe9" className="social-link-item" target="_blank" rel="noopener noreferrer">
            <FaBook />
          </a>
        </div>
      </div>
    </aside>
  );
}
