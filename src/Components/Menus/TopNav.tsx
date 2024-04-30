import { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import '../../App.scss';
import { TopNavProps } from './menuProps';
import Submenu from './Submenu';

const TopNav: FunctionComponent<TopNavProps> = ({
  name, url, submenus, id
}) => {
  const [submenuIsOpen, setSubmenuIsopen] = useState(false);

  const openSubmenu = submenus && submenuIsOpen;

  const handleMouseEnter = () => {
    setSubmenuIsopen(true)
  }

  const handleMouseLeave = () => {
    setSubmenuIsopen(false)
  }

  return (
    <li className="top-nav__list"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={id}
    >
      <a href={url} className="top-nav__link link">
        {name}
      </a>
      <div className={classNames('submenu__container',
        { 'submenu__container--open': submenuIsOpen })}>
        {openSubmenu && submenus.map((menu) => (
          <Submenu name={menu.name} url={menu.url} subSubmenu={menu.subSubmenu} id={menu?.id} />
        ))}
      </div>
    </li >
  );
}

export default TopNav;
