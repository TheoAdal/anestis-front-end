import React from 'react';
import './InfoPageStyles.scss';
import { useTranslation } from 'react-i18next';

function InfoPage() {
  const { t } = useTranslation(); // Hook for translation
  return (
    <div className="info-page-container">
      <section className="mission-section">
      <h2>{t('mission_title')}</h2> {/* Use translation key */}
      <p>{t('mission_description')}</p> {/* Use translation key */}
      </section>

      <section className="team-section">
      <h2>{t('team_title')}</h2> {/* Use translation key */}
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <h3>{t('team_member_1_name')}</h3> {/* Use translation key */}
          <p>{t('team_member_1_role')}</p> {/* Use translation key */}
        </div>
        <div className="team-member">
          <img src="team-member-2.jpg" alt="Team Member 2" />
          <h3>{t('team_member_2_name')}</h3> {/* Use translation key */}
          <p>{t('team_member_2_role')}</p> {/* Use translation key */}
        </div>
      </section>

      <section className="history-section">
      <h2>{t('history_title')}</h2> {/* Use translation key */}
      <p>{t('history_description')}</p> {/* Use translation key */}
      </section>
    </div>
  );
}

export default InfoPage;
