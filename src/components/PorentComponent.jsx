import React, { useCallback, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Title from "./Title";

function PorentComponent() {
  const [experience, setExperience] = useState(1);
  const [salary, setSalary] = useState(300);
  console.log("Rendir Porent");

  const increaseExperience = useCallback(() => {
    {
      setExperience((experience1) => experience1 + 1);
    }
  }, []);

  const increaseSalary = useCallback(() => {
    setSalary((salary1) => salary1 + 1000);
  }, []);

  return (
    <div>
      <Title />
      <Counter text="Experience" counter={experience} />
      <Button handlerCilik={increaseExperience}>
        Dasturchini tajribasini oshirish
      </Button>
      <Counter text="salary" counter={salary} />
      <Button handlerCilik={increaseSalary}>
        Dasturchini oylikgini oshishi
      </Button>
    </div>
  );
}

export default React.memo(PorentComponent);
