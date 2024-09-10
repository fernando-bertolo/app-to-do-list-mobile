import { TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Check } from 'lucide-react-native';
import { useState } from "react";

type checkBoxProps = {
  setIsChecked: (value: boolean) => void,
  isChecked: boolean
}

export function CheckBox({isChecked, setIsChecked}: checkBoxProps) {

  function handleCheckBox() {
    isChecked ? setIsChecked(false) : setIsChecked(true)
  }

  return (
    <TouchableOpacity 
      style={isChecked ? styles.checkedContainer : styles.uncheckedContainer} 
      onPress={handleCheckBox}
    >
      {isChecked && (
        <Check size={16} color="#FFF" />
      )}
    </TouchableOpacity>
  )
}