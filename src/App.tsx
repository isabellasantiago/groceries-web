import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FileContextProvider } from "@/helpers";
import { LoadFile, Search } from "@/Pages"


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FileContextProvider>
        <ToastContainer />
          <Routes>
            <Route path='/' element={<LoadFile />} />
            <Route path='/search' element={<Search />}/>
          </Routes>
        </FileContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
