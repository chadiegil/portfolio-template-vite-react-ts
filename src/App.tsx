import { Provider } from "react-redux"
import "./App.css"
import { store } from "@redux/store"
import { AppInitializer } from "@features/app-initializer"
function App() {
  return (
    <>
      <Provider store={store}>
        <AppInitializer />
      </Provider>
    </>
  )
}

export default App
