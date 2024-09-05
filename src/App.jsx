import { Slide, ToastContainer } from 'react-toastify';
import AppRouter from './AppRouter';
import GlobalContextProvider from './context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, //1 hr
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
