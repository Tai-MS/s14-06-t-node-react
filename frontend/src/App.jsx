import "./App.css";
import Navigation from "./route";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/index.js";
import { persistor } from "./store/index.js";
import { HashRouter } from "react-router-dom";
import 'dayjs/locale/es' // load on demand


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <Navigation />
      </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
