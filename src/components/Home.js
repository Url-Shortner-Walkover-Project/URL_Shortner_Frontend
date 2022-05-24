import React, { useContext } from "react";

import AllURLs from "./AllURLs";

const Home = (props) => {
  const { showAlert } = props;

  return <AllURLs showAlert={showAlert} />;
};

export default Home;
