import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'; // Припускаємо шлях до компонента
import SignUp from './pages/SignUp'; // Припускаємо шлях до компонента
import Dashboard from './pages/Admin/Dashboard'; // Припускаємо шлях до компонента
import ManageTasks from './pages/Admin/ManageTasks';
import CreateTask from './pages/Admin/CreateTask';
import ManageUsers from './pages/Admin/ManageUsers';
import UserDashboard from './pages/User/Dashboard'; // Припускаємо шлях для користувацького Dashboard

const PrivateRoute = ({ children, allowedRoles }) => {
  // Заміни на реальну логіку авторизації
  const isAuthenticated = true; // Наприклад, перевірка токена з localStorage
  const userRole = 'admin'; // Заміни на реальну роль користувача (admin або user)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Кореневий маршрут */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Публічні маршрути */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Адмінські маршрути */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="tasks" element={<ManageTasks />} />
                <Route path="create-task" element={<CreateTask />} />
                <Route path="users" element={<ManageUsers />} />
              </Routes>
            </PrivateRoute>
          }
        />

        {/* Користувацькі маршрути */}
        <Route
          path="/user/*"
          element={
            <PrivateRoute allowedRoles={['user']}>
              <Routes>
                <Route path="dashboard" element={<UserDashboard />} />
              </Routes>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;