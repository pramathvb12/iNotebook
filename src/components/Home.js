import React from "react";

import Notes from "./Notes";
const Home = (props) => {
  const { showAlert } = props; //destructure
  return (
    <div>
      {/* passing notes with props */}
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
