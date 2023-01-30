// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Cuotas = lazy(() => import('../pages/protected/Cuotas/Cuotas'))
const Team = lazy(() => import('../pages/protected/Team'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
// const GettingStarted = lazy(() => import('../pages/GettingStarted'))
// const DocFeatures = lazy(() => import('../pages/DocFeatures'))
// const DocComponents = lazy(() => import('../pages/DocComponents'))
const Presupuesto = lazy(() => import('../pages/protected/Presupuesto/Presupuesto'))





const routes = [
    {
        path: '/dashboard', // the url
        component: Dashboard, // view rendered
    },
    {
        path: '/welcome', // the url
        component: Welcome, // view rendered
    },
    {
        path: '/prestamo',
        component: Leads,
    },
    {
        path: '/settings-team',
        component: Team,
    },
    {
        path: '/settings-profile',
        component: ProfileSettings,
    },
    {
        path: '/settings-billing',
        component: Bills,
    },
    {
        path: '/Cuotas',
        component: Cuotas,
    },
    {
        path: '/charts',
        component: Charts,
    },
    {
        path: '/404',
        component: Page404,
    },
    {
        path: '/blank',
        component: Blank,
    },
    {
        path: '/presupuesto/presupuesto',
        component: Presupuesto,
    },
]

export default routes
