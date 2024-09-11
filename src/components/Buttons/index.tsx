import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { CirclePlus } from "lucide-react-native";

type buttonProps = {
  addTask: () => void
}

export function Button({addTask}: buttonProps){
  return(
    <TouchableOpacity style={styles.container} onPress={addTask}>      
        <CirclePlus size={24} color="#FFF"/>      
    </TouchableOpacity>
  )
}