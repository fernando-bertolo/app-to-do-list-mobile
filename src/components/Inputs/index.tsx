import { TextInput } from "react-native";
import { styles } from "./style";

type inputProps = {
  setListTaskName: (value: string) => void,
  listTaskName: string
}

export function Input({setListTaskName, listTaskName} : inputProps){

  return(
    <TextInput
      style={styles.container}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      onChangeText={(text) => setListTaskName(text)}
      value={listTaskName}
    />
  )
}