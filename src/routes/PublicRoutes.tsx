// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom'
import SignupForm from '../features/auth/forms/SignupForm'
import LoginForm from '../features/auth/forms/LoginForm';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
        </Routes>
    )
}
