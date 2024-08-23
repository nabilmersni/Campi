import AppRouter from './AppRouter';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <div className="flex h-full flex-col overflow-hidden scroll-smooth font-nunito">
      <GlobalContextProvider>
        <AppRouter />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
