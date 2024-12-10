import { useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";

import Detalhes from "./src/components/detalhes";

export default function App() {
  const [status, setStatus] = useState(false);
  const [beneficio, setBeneficio] = useState("");

  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");

  function calcular() {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina) && precoGasolina > 0) {
      const resultado = alcool / gasolina;

      if (resultado < 0.7) {
        setBeneficio("Alcool");
      } else {
        setBeneficio("Gasolina");
      }
      setStatus(true);
    } else {
      alert("Digite valores validos!");
    }
  }

  function repetir() {
    setStatus(false);
    setGasolina("");
    setAlcool("");
  }

  return (
    <View style={st.container}>
      <StatusBar backgroundColor="#212121" />
      <Image source={require("./src/images/logo.png")} />

      <Text style={st.title}>Qual a melhor opção?</Text>

      <View style={st.inputArea}>
        <Text style={st.titulo}>Álcool (preço por litro):</Text>
        <TextInput
          placeholder="Ex: 4.60"
          style={st.input}
          value={alcool}
          onChangeText={(valor) => setAlcool(valor)}
          keyboardType="numeric"
        />

        <Text style={st.titulo}>Gasolina (preço por litro):</Text>
        <TextInput
          placeholder="Ex: 7.30"
          style={st.input}
          value={gasolina}
          onChangeText={(valor) => setGasolina(valor)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={st.areaBotao} onPress={calcular}>
        <Text style={st.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Modal visible={status} animationType="slide" transparent={false}>
        <Detalhes
          fechar={repetir}
          gasolina={gasolina}
          alcool={alcool}
          resultado={beneficio}
        />
      </Modal>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
  },
  title: {
    color: "#fafafa",
    fontSize: 30,
    fontWeight: 600,
    marginTop: 14,
  },
  inputArea: {
    width: " 60%",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  titulo: {
    color: "#fafafa",
    fontSize: 18,
    marginBottom: 6,
  },
  areaBotao: {
    backgroundColor: "#EF4130",
    width: "60%",
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fafafa",
    fontSize: 26,
    fontWeight: 700,
  },
});
