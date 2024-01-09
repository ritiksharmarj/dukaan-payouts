import { NavLink } from 'react-router-dom';
import {
  AnalyticsIcon,
  AppearanceIcon,
  AudienceIcon,
  DeliveryIcon,
  DiscountsIcon,
  HomeIcon,
  MarketingIcon,
  OrdersIcon,
  PayoutsIcon,
  PluginsIcon,
  ProductsIcon,
} from '../assets/icons';

export default function Navbar() {
  const navItems = [
    { to: '/', icon: <HomeIcon />, label: 'Home' },
    { to: '/orders', icon: <OrdersIcon />, label: 'Orders' },
    { to: '/products', icon: <ProductsIcon />, label: 'Products' },
    { to: '/delivery', icon: <DeliveryIcon />, label: 'Delivery' },
    { to: '/marketing', icon: <MarketingIcon />, label: 'Marketing' },
    { to: '/analytics', icon: <AnalyticsIcon />, label: 'Analytics' },
    { to: '/payouts', icon: <PayoutsIcon />, label: 'Payouts' },
    { to: '/discounts', icon: <DiscountsIcon />, label: 'Discounts' },
    { to: '/audience', icon: <AudienceIcon />, label: 'Audience' },
    { to: '/appearance', icon: <AppearanceIcon />, label: 'Appearance' },
    { to: '/plugins', icon: <PluginsIcon />, label: 'Plugins' },
  ];

  return (
    <nav className='w-full'>
      <ul className='flex flex-col gap-1'>
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li className='main-nav__link'>
      <NavLink
        to={to}
        className='group flex items-center transition-all py-2 px-4 gap-3 rounded hover:bg-navbar-100'
      >
        {icon}
        <span className='text-sm font-medium opacity-80 group-hover:opacity-100 transition-all'>
          {label}
        </span>
      </NavLink>
    </li>
  );
}
