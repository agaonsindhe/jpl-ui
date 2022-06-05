import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import Blank from './pages/Blank'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/jpl-ui/" element={<MainLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="football" element={<Blank />} />
                    <Route path="cricket" element={<Blank />} />
                    <Route path="rewards" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                </Route>

            </Routes>

        </BrowserRouter>
    )
}

export default App
