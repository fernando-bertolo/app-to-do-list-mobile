import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import { Trash2 } from "lucide-react-native";
import { CheckBox } from "../Checkbox";
import { useState } from "react";

export function TaskList() {
  const [isChecked, setIsChecked] = useState<boolean>(false);



  return (
    <View style={styles.container}>
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
      <Text style={!isChecked ? styles.taskText : styles.taskTextStrike}>Descrição da tarefa aqui</Text>
      <Trash2 size={24} color="#FFF" strokeWidth={1} />
    </View>
  )
}