import './App.css'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import RegisterDocuments from './components/Register/RegisterDocuments'
import RegisterLocation from './components/Register/RegisterLocation'
import RegisterUpLoad from './components/Register/RegisterUpLoad'
import RegFormProvider from './Context/RegFromProvider'
import InvestmentDashboard from './pages/Dashboard/InvestmentDashboard/InvestmentDashboard'
import BuyerDsahboard from './pages/Dashboard/BuyerDashboard/BuyerDsahboard'
import AdminDashboard from './pages/Dashboard/AdminDashboard/AdminDashboard'
import RegisterInfo from './components/Register/RegisterInfo'
import RegisterLegal from './components/Register/RegisterLegal'
function App() {
  return (
    <div>
      <RegFormProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/document' element={<RegisterDocuments/>}/>
        <Route path='/document1' element={<RegisterLocation/>}/>
        <Route path='/documentLegal' element={<RegisterLegal/>}/>
        <Route path='/document2' element={<RegisterUpLoad/>}/>
        <Route path='/documentInfo' element={<RegisterInfo/>}/>
        <Route path='/dashboard' element={<InvestmentDashboard/>}/>
        <Route path='/dashboardBuyer' element={<BuyerDsahboard/>}/>
        <Route path='/dashboardAdmin' element={<AdminDashboard/>}/>
      </Routes>
      </RegFormProvider>
    </div>
  )
}

export default App
