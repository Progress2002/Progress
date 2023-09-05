import React from "react";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const ResumeBtn = () => {
  return (
    <button>
      <Link
        to="https://media.publit.io/file/Progress-Ezeamaka-Resume.html"
        target="blank">
        {" "}
        Resume <ImDownload />
      </Link>
    </button>
  );
};

export default ResumeBtn;
