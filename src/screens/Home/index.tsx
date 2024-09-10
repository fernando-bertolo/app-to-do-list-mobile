import { Image, View, Text } from "react-native"
import { styles } from "./styles"
import { Button } from "../../components/Buttons"
import { Input } from "../../components/Inputs"
import { TaskList } from "../../components/TaskList"
import { ScrollText } from "lucide-react-native"



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


          <View style={styles.sectionTasks}>
            <View style={styles.sectionCreatedAndDone}>
              <View style={styles.sectionCreated}>
                <Text style={styles.text}>Criadas</Text>
                <Text style={styles.textCountTasks}>0</Text>
              </View>
              <View style={styles.sectionDone}>
                <Text style={styles.text}>Concluídas</Text>
                <Text style={styles.textCountTasks}>2</Text>
              </View>
            </View>

            <View style={styles.sectionListTasks}>
              <TaskList />

              <View style={styles.sectionEmptyListTask}>
                <ScrollText size={58} color="#333333" strokeWidth={1} />

                <View>
                  <Text style={styles.textEmptyListTaskBold}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.textEmptyListTaskRegular}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            </View>

          </View>

        </View>

      </View>
    </>
  )
}