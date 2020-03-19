import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const CookieBanner = () => {
  const [open, setOpen] = useState(true);
  const cookieHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: "0",
            width: "100%",
            height: "60px",
            backgroundColor: "rgba(50, 50, 50, 0.9)",
            color: "white",
            zIndex: "1000"
          }}
        >
          <p style={{ margin: "0 10px" }}>
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
