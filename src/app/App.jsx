import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import PetCatalogPage from '../pages/PetCatalogPage.jsx'
import PetDetailPage from '../pages/PetDetailPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="mascotas" element={<PetCatalogPage />} />
        <Route path="mascotas/:petId" element={<PetDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
