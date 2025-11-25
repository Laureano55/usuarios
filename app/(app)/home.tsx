import { SafeAreaProvider } from "react-native-safe-area-context";
import { useUser } from "../../hooks/useUser";

import Rutas from "./rutas";


export default function Home() {
  const { user, logout } = useUser();

  return (
    <SafeAreaProvider>
      <Rutas />
    </SafeAreaProvider>
  );
}
