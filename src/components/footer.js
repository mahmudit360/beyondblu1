import React, { useEffect } from "react";
import Link from "./app_link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize Histats tracking script
    window._Hasync = window._Hasync || [];
    window._Hasync.push(['Histats.start', '1,4843947,4,3,170,30,00011111']);
    window._Hasync.push(['Histats.fasi', '1']);
    window._Hasync.push(['Histats.track_hits', '']);
    window._Hasync.push(['Histats.framed_page', '']);

    const hs = document.createElement('script');
    hs.type = 'text/javascript';
    hs.async = true;
    hs.src = '//s10.histats.com/js15_as.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);

    // Cleanup function to remove script if the component unmounts
    return () => {
      if (document.body.contains(hs)) {
        document.body.removeChild(hs);
      }
    };
  }, []);

  return (
    <footer className="bg-white relative">
      <div className="container">
        <div className="lg:flex lg:pt-6">
          <div className="lg:w-2/4 text-center lg:text-left py-5">
            <img
              src={require("../images/beyond-bleu.svg")}
              className="inline-block mb-4 w-48"
              alt="Beyond Bleu"
            />
            <h2 className="text-lg mb-0">{t("Appointments and Inquiries")}</h2>
            <div>
              <strong>{t("Monday to Sunday (Everyday)")}</strong> 9:00~18:00      
            </div>
                <a href="https://gottmanconnect.com">
            <img
              src={require("../images/gottman_checkup_badge.png")}
              height="202"
              width="250"
              alt="Gottman Approved Member"
            />
          </a>
          </div>
          <div className="lg:w-1/4 ml-auto text-center lg:text-left p-5 pt-10">
            <h2 className="b-line text-3xl"> {t("Sitemap")}</h2>
            <nav className="flex flex-col w-auto mx-auto">
              <Link to="/" className="no-underline ">
                {t("Home")}
              </Link>
              <Link to="/about" className="no-underline">
                {t("About")}
              </Link>
              <Link to="/individual-therapy" className="no-underline">
                {t("Individuals")}
              </Link>
              <Link to="/couples-therapy" className="no-underline">
                {t("Couples")}
              </Link>
              <Link to="/relationship-counseling" className="no-underline">
                {t("Relationships")}
              </Link>
              <Link to="/booking" className="no-underline">
                {t("Booking")}
              </Link>
              <Link to="/access" className="no-underline">
                {t("Access")}
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 text-center lg:text-left p-5 pt-10">
            <h2 className="b-line text-3xl">{t("Contact me")}</h2>
            <div className="mb-4">
              <a href="tel:03-5962-3883" className="no-underline">
                <FontAwesomeIcon icon="phone" className="mr-2" />
                03-5962-3883
              </a>
            </div>
            <div className="mb-4">
              <a href="mailto:info@beyondbleu.com" className="no-underline">
                <FontAwesomeIcon icon="envelope" className="mr-2" />
                info@beyondbleu.com
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://www.instagram.com/beyondbleu_psychotherapy/"
                className="no-underline"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} className="mr-2" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-6 text-center lg:text-left flex items-center justify-between">
          <div>© {new Date().getFullYear()}@beyondbleu.com. All rights reserved.</div>
          
        </div>
      </div>
    </footer>
  );
}
