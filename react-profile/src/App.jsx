import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  const [page, setPage] = useState('home')

  return (
    <Layout>
      {page === 'home' &&  <Home />}
      {page === 'about' && <About />}
    </Layout>
  )
}

export default App
