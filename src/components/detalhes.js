import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Detalhes({gasolina, alcool, fechar, resultado}) {
  return (
    <View style={st.container}>
      <Image source={require("../images/gas.png")} />

      <View style={st.areaResultado}>
        <Text style={st.titulo}>Compensa usar {resultado}</Text>

        <Text style={st.subTitulo}>Com os preços:</Text>
        <Text style={st.combustivel}>Álcool: R$ {alcool}</Text>
        <Text style={st.combustivel}>Gasolina: R$ {gasolina}</Text>
      </View>

      <TouchableOpacity style={st.areaBotao} onPress={fechar}>
        <Text style={st.textoBotao}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  areaResultado: {
    marginTop: 10,
  },
  titulo: {
    color: "#30EE5A",
    fontSize: 28,
    fontWeight: 600,
    marginBottom: 20,
  },
  subTitulo: {
    color: "#fafafa",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 14,
  },
  combustivel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  textoBotao: {
    color: "#EF4130",
    fontSize: 20,
    fontWeight: 600,
  },
  areaBotao: {
    marginTop:20,
    borderWidth: 1,
    borderColor: "#EF4130",
    width: "60%",
    alignItems: "center",
    height: 40,
    justifyContent: 'center',
    borderRadius: 8
  },
});
