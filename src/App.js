import { NewsContextProvider } from "./NewsContext";
import News from "./components/News.jsx";

function App() {
  return (
    <NewsContextProvider>
      <News></News>
    </NewsContextProvider>
  );
}

export default App;
