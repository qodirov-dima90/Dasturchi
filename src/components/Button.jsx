import React from "react";

function Button({ handlerCilik, children }) {
  console.log(`Rendir Buttan`);
  return (
    <div>
      <button onClick={handlerCilik}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
