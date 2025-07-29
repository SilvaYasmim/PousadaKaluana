import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from "react-native";
import { pousadaInfo } from "../../data/pousada.config";


export default function Home() {
  const handleWhatsApp = () => {
  Linking.openURL(pousadaInfo.contato.whatsapp);
};
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{pousadaInfo.nome}</Text>
      <Text style={styles.city}>{pousadaInfo.cidade}</Text>
      <Text style={styles.description}>{pousadaInfo.descricao}</Text>

      <Text style={styles.sectionTitle}>Acomodações</Text>

      {pousadaInfo.quartos.map((quarto, index) => (
        <><View key={index} style={styles.quartoCard}>
          <Text style={styles.quartoNome}>{quarto.nome}</Text>
          <Text style={styles.quartoPreco}>{quarto.preco}</Text>
          <Text style={styles.quartoDesc}>{quarto.descricao}</Text>
        </View><Pressable onPress={handleWhatsApp} style={styles.whatsappButton}>
            <Text style={styles.whatsappText}>Falar com a Pousada via WhatsApp</Text>
          </Pressable></>

        
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f1f5f4",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0b904b",
    marginBottom: 4,
  },
  city: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
    color: "#91292f",
  },
  quartoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quartoNome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  quartoPreco: {
    fontSize: 16,
    color: "#0b904b",
    marginBottom: 4,
  },
  quartoDesc: {
    fontSize: 14,
    color: "#555",
  },
  whatsappButton: {
    marginTop: 24,
    backgroundColor: "#0b904b",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  whatsappText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});



const handleWhatsApp = () => {
  Linking.openURL(pousadaInfo.contato.whatsapp);
};
