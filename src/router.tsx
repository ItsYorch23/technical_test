import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Tasks from './views/Tasks'

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} index />
                <Route path='/tasks/create' element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    )
}