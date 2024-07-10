import React from "react";

function Counter({ text, counter }) {
  console.log(`Rendir ${text}`);
  return (
    <div>
      <h3>
        Dasturchini {text} {counter}
      </h3>
    </div>
  );
}

export default React.memo(Counter);
