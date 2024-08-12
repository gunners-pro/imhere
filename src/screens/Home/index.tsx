import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Fabricyo', 'Lilian', 'Sabrina', 'Leila', 'Lyam', 'Savia', 'thalisson', 'Drew', 'Tanisha', 'Savio']
  function handleParticipantAdd() {}

  function handleParticipantRemove() {
    console.log('removeu')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 11 de Agosto de 2024.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return (
            <Participant name={item} onRemove={handleParticipantRemove} />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda. Adicione participante à sua lista de presença
          </Text>
        )}
      />

    </View>
  )
}
