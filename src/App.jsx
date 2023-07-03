import './App.css'
import Formulario from './components/Formulario/Formulario'
import Head from "./components/Head"
import Card from "./components/Card"
import { FormContext } from './context/formContext'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({})
  const updateData = (obj) => setFormData(obj)

  const initialFormData = {
    formData,
    updateData
  }
  return (
    <main>
    <FormContext.Provider value={initialFormData}>
      <Head />
      <Formulario/>
    </FormContext.Provider>
      <Card formData={formData}/>
    </main>
  )
}

export default App
