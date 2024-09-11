import { Image, View, Text, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Button } from "../../components/Buttons"
import { Input } from "../../components/Inputs"
import { TaskList } from "../../components/TaskList"
import { ScrollText } from "lucide-react-native"
import { useState } from "react"



export function Home() {

  const [listTasks, setListTasks] = useState<string[]>([]);
  const [listTaskName, setListTaskName] = useState<string>('');
  const [quantityTasksDone, setQuantityTasksDone] = useState<number>(listTasks.length);


  function addTask() {
    setListTasks(prevState => [...prevState, listTaskName])
    setListTaskName('')
  }

  function removeTask(descricao: string){
    Alert.alert('Remover', 'Deseja remover esta tarefa?', [
      {
        text: 'Sim',
        onPress: () => setListTasks(prevState => prevState.filter(descricao => descricao !== listTaskName))
      }
    ])
  }

  return (
    <>
      <View style={styles.firstBackground}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.secondBackground}>
        <View style={styles.container}>
          <View style={styles.form}>
            <Input setListTaskName={setListTaskName} listTaskName={listTaskName} />
            <Button addTask={addTask} />
          </View>


          <View style={styles.sectionTasks}>
            <View style={styles.sectionCreatedAndDone}>
              <View style={styles.sectionCreated}>
                <Text style={styles.text}>Criadas</Text>
                <Text style={styles.textCountTasks}>{listTasks.length}</Text>
              </View>
              <View style={styles.sectionDone}>
                <Text style={styles.text}>Concluídas</Text>
                <Text style={styles.textCountTasks}>{quantityTasksDone}</Text>
              </View>
            </View>

            <View style={styles.sectionListTasks}>
              <FlatList
                data={listTasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <TaskList
                    key={item}
                    descriptionTask={item}
                    setQuantityTasksDone={setQuantityTasksDone}
                    quantityTasksDone={quantityTasksDone}
                    onRemove={() => removeTask(item)}
                  />
                )}

                ListEmptyComponent={() => (
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
                )}

              />
            </View>

          </View>

        </View>

      </View>
    </>
  )
}