/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import CurrencyDolar from "@heroicons/react/24/outline/CurrencyDollarIcon";

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

    {
        path: '/app/dashboard',
        icon: <Squares2X2Icon className={iconClasses} />,
        name: 'Dashboard',
    },
    {
        path: '/app/prestamo', // url
        icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
        name: 'Prestamos', // name that appear in Sidebar
    },
    {
        path: '/app/presupuesto/presupuesto', // url
        icon: <CurrencyDolar className={iconClasses} />, // icon component
        name: 'Presupuesto', // name that appear in Sidebar
    },
    {
        path: '/app/Cuotas', // url
        icon: <BoltIcon className={iconClasses} />, // icon component
        name: 'Cuotas', // name that appear in Sidebar
    },

    {
        path: '', //no url needed as this has submenu
        icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
        name: 'Settings', // name that appear in Sidebar
        submenu: [
            {
                path: '/app/settings-profile', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Profile', // name that appear in Sidebar
            },
            {
                path: '/app/settings-billing',
                icon: <WalletIcon className={submenuIconClasses} />,
                name: 'Billing',
            },
            {
                path: '/app/settings-team', // url
                icon: <UsersIcon className={submenuIconClasses} />, // icon component
                name: 'Team Members', // name that appear in Sidebar
            },
        ]
    },

    {
        path: '', // url
        // icon: <UsersIcon className={iconClasses} />, // icon component
        name: 'Mantenimientos', // name that appear in Sidebar
        submenu: [
            {
                path: '/cliente', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Cliente', // name that appear in Sidebar
            },
            {
                path: '/TipoGasto', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Tipo de Gasto', // name that appear in Sidebar
            },
            {
                path: '/register', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Register', // name that appear in Sidebar
            },
            {
                path: '/register', //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: 'Register', // name that appear in Sidebar
            },
        ]
    },

]

export default routes


