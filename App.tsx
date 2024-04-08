import { Provider } from "react-redux";
import CounterScreen from "./src/screens/lab6/counterScreen";
import { store } from "./src/app/store";
import PokemonScreen from "./src/screens/lab6/pokemonSearch";
import Lab7Screen from "./src/screens/lab7/Lab7Screen";
import FormScreen from "./src/screens/lab6/formScreen";
import Lab8Bai3 from "./src/screens/lab8/lab8_2";


function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <CounterScreen/> */}
      {/* <PokemonScreen /> */}
      {/* <FormScreen/> */}
      <Lab7Screen/>
      
      
    </Provider>
  );
}

export default App;
