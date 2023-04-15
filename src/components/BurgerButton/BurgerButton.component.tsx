import React from "react";
import { BurgerButton, Input, Label } from "./BurgerButton.styled";
import { BurgerButtonProps } from "./BurgerButton.type";

export const BurgerButtonComponent: React.FC<BurgerButtonProps> = ({
  checked,
  ariaControls,
  onChange,
}) => {
  return (
    <BurgerButton role="checkbox">
      <Input
        type="checkbox"
        id="burgerbutton"
        onChange={onChange}
        checked={checked}
        aria-checked={checked}
        aria-controls={ariaControls}
        aria-label="burgerbutton"
      />
      <Label htmlFor="burgerbutton" />
    </BurgerButton>
  );
};
