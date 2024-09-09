import { Image, View } from "react-native"
import { styles } from "./styles"
import { Button } from "../../components/Buttons"
import { Input } from "../../components/Inputs"



export function Home() {
  return (
    <>
      <View style={styles.firstBackground}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.secondBackground}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Input />
            <Button />
          </View>
        </View>

      </View>
    </>
  )
}