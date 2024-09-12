import React from "react";
import "./InfoPageStyles.scss";
import { useTranslation } from "react-i18next";
import team1 from "../../images/team1.webp";
import team2 from "../../images/team2.webp";

function InfoPage() {
  const { t } = useTranslation(); // Hook for translation
  return (
    <div className="px-5">
      {/* <div className="flex flex-col items-start">
        <p className="font-roboto">{t("mission_title")}</p>
        <p className="font-roboto">{t("mission_description")}</p>
      </div> */}

      <div className="flex flex-col items-start mb-10">
        <p className="text-gray-600 text-lg font-medium mt-0 mb-14">
          {t("team_title")}
        </p>

        <div className="flex sm:flex-row flex-col justify-start items-start mb-10">
          <img
            src={team1}
            alt="Team Member 1"
            className="sm:w-96 w-42 grayscale mr-8 mt-1 mb-6"
          />
          <div className="flex flex-col items-start">
            <p className="text-gray-800 text-xl my-0">
              {t("team_member_1_name")}
            </p>
            <p className="text-gray-800 text-base mb-0 mt-3 text-justify">
              {t("team_member_1_description")}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-start items-start mb-10">
          <img
            src={team2}
            alt="Team Member 2"
            className="sm:w-96 w-42 grayscale mr-8 mt-1 mb-6"
          />
          <div className="flex flex-col items-start">
            <p className="text-gray-800 text-xl my-0">
              {t("team_member_2_name")}
            </p>
            <p className="text-gray-800 text-base mb-0 mt-3 text-justify">
              {t("team_member_2_description")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start mb-20">
        <h2 className="text-gray-600 text-lg font-medium mt-0">
          {t("history_title")}
        </h2>
        <p className="text-gray-600 mt-8 text-justify">
          {t("history_description")}
        </p>
      </div>
    </div>
  );
}

export default InfoPage;
