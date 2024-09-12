import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Trash2 } from "lucide-react-native";
import { CheckBox } from "../Checkbox";
import { useState } from "react";

type taskListProps = {
  descriptionTask: string,
  setQuantityTasksDone: (value: number) => void,
  quantityTasksDone: number,
  onRemove: () => void
}

export function TaskList({
  descriptionTask,
  setQuantityTasksDone,
  quantityTasksDone,
  onRemove
}: taskListProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <CheckBox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setQuantityTasksDone={setQuantityTasksDone}
        quantityTasksDone={quantityTasksDone}
      />
      <Text style={!isChecked ? styles.taskText : styles.taskTextStrike}>
        {descriptionTask}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={24} color="#FFF" strokeWidth={1} />
      </TouchableOpacity>
    </View>
  )
}