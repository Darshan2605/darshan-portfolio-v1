"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaCalendar, FaSchool, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode, FaBook, FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <aside className={`sidebar${showContacts ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/My-image.jpg"
            alt="Darshan Londhe"
            width={80}
            height={80}
            style={{ borderRadius: '20%', width: '110px', height: '110px' }}
            className="sidebar-avatar-img"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Darshan Londhe">Darshan Londhe</h1>
          <p className="title">MERN Stack Developer</p>
          <p className="title" style={{ marginTop: 10 }}>DevOps</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={() => setShowContacts((v) => !v)}>
          <span>Show Contacts</span>
          <FaChevronDown style={{ marginLeft: 8 }} />
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
              <p className="contact-title">College(2021-2025)</p>
              <p className="contact-title">BE in Computer Engineering</p>
              <address>AISSMS IOIT, Pune</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pune, Maharastra, India</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaGithub /></div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href="https://github.com/darshan2605" className="contact-link" target="_blank" rel="noopener noreferrer">darshan2605</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaLinkedin /></div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/darshan-londhe-812303251" className="contact-link" target="_blank" rel="noopener noreferrer">darshan-londhe</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaCode /></div>
            <div className="contact-info">
              <p className="contact-title">LeetCode</p>
              <a href="https://leetcode.com/Darshan_Londhe" className="contact-link" target="_blank" rel="noopener noreferrer">Darshan_Londhe</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box"><FaBook /></div>
            <div className="contact-info">
              <p className="contact-title">Medium</p>
              <a href="https://medium.com/@darshanlondhe9" className="contact-link" target="_blank" rel="noopener noreferrer">@darshanlondhe9</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
} 