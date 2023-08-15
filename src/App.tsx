import LoadFile from "./Pages/LoadFile"
import { QueryClient, QueryClientProvider } from 'react-query';
import { FileContextProvider } from "./helpers/context/filesContext";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <FileContextProvider>
        <Routes>
          <Route path='/' element={<LoadFile/>} />
          <Route path='/search'/>
        </Routes>
      </FileContextProvider></BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
