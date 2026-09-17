import {
  IoCameraOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoShareSocialOutline,
  IoVideocamOutline,
} from 'react-icons/io5';

const menuItems = [
  { title: 'Inicio', icon: <IoHomeOutline />, gradientFrom: '#52525b', gradientTo: '#18181b' },
  { title: 'Video', icon: <IoVideocamOutline />, gradientFrom: '#64748b', gradientTo: '#334155' },
  { title: 'Fotos', icon: <IoCameraOutline />, gradientFrom: '#71717a', gradientTo: '#3f3f46' },
  { title: 'Share', icon: <IoShareSocialOutline />, gradientFrom: '#6b7280', gradientTo: '#1f2937' },
  { title: 'Tym', icon: <IoHeartOutline />, gradientFrom: '#78716c', gradientTo: '#292524' },
];

function GradientMenu() {
  return (
    <nav className="gradient-menu" aria-label="Accesos rápidos destacados">
      <ul className="gradient-menu-list">
        {menuItems.map(({ title, icon, gradientFrom, gradientTo }) => (
          <li
            key={title}
            className="gradient-menu-item"
            style={{
              '--gradient-from': gradientFrom,
              '--gradient-to': gradientTo,
            }}
          >
            <span className="gradient-menu-bg" aria-hidden="true" />
            <span className="gradient-menu-glow" aria-hidden="true" />
            <span className="gradient-menu-icon" aria-hidden="true">
              {icon}
            </span>
            <span className="gradient-menu-title">{title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GradientMenu;
