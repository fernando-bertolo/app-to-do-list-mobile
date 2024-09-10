import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { CirclePlus } from "lucide-react-native";

export function Button(){
  return(
    <TouchableOpacity style={styles.container}>      
        <CirclePlus size={24} color="#FFF"/>      
    </TouchableOpacity>
  )
}