import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyDatas from '../pages/my datas/myDatas'
import Dashboard from '../pages/home/dashboard/dashboard'
const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route   path='/' element={<MyDatas/>}/>
        <Route   path='/t' element={<Dashboard/>}/>
    </Routes>
        
    </BrowserRouter>
  )
}

export default MyRoutes