import React from "react";

function Title() {
  console.log(`Render Title`);
  return (
    <div>
      <h1>Abdulla dasturchi </h1>
    </div>
  );
}

export default React.memo(Title);
