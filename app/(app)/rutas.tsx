import { View, Text, Button, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Main from "../components/MainMapa";

export default function Rutas() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const MainMapa = "../components/MainMapa"; 

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Selecciona un Conductor</Text>

      <View style={styles.buttonsContainer}>
        <Button title="Conductor 1" onPress={() => router.push(MainMapa)} />
        <Button title="Conductor 2" onPress={() => router.push(MainMapa)} />
        <Button title="Conductor 3" onPress={() => router.push(MainMapa)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 30,
  },
  buttonsContainer: {
    width: "80%",
    gap: 20,
  },
});
