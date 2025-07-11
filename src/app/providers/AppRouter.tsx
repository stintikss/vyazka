import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Calculations from '../../pages/Calculations/Calculations';

export const AppRouter = () => (
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/calculation" element={<Calculations />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
);
