import { Slide, ToastContainer } from 'react-toastify';
import AppRouter from './AppRouter';
import GlobalContextProvider from './context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="flex h-full flex-col overflow-hidden scroll-smooth font-nunito">
      <Provider store={store}>
        <GlobalContextProvider>
          <AppRouter />
          <ToastContainer
            toastStyle={{ fontFamily: 'nunito' }}
            autoClose={2000}
            transition={Slide}
          />
        </GlobalContextProvider>
      </Provider>
    </div>
  );
}

export default App;
