import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Loader = () => {
    return  <FontAwesomeIcon className="fa-spin" icon={faSpinner} />;
}

export default Loader;