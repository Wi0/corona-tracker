import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import classes from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [open, setOpen] = useState(true);
  const cookieHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className={classes.Banner}>
          <p className={classes.BannerText}>
            We use cookies to ensure that we give you the best experience on our
            website. By continueing to use this website you consent to this use.
          </p>

          <button onClick={cookieHandler}>
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CookieBanner;
