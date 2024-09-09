import { TextInput } from "react-native";
import { styles } from "./style";

export function Input(){
  return(
    <TextInput
      style={styles.container}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
    />
  )
}