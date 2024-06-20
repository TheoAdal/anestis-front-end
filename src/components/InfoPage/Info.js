import React from 'react';
import './InfoPageStyles.scss';

function InfoPage() {
  return (
    <div className="info-page-container">
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Anestis Adalakis, our mission is to deliver innovative architectural designs that blend aesthetics, functionality, and sustainability. We are dedicated to creating spaces that inspire and meet the unique needs of our clients.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>Team Member 1</h3>
          <p>Architect</p>
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member 2" />
          <h3>Team Member 2</h3>
          <p>Designer</p>
        </div>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Founded in 2000, Anestis Adalakis has grown from a small firm to a leading architectural practice known for its innovative designs and client-focused approach. Over the years, we have completed numerous projects across various sectors, including residential, commercial, and public spaces.
        </p>
      </section>
    </div>
  );
}

export default InfoPage;
