import { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import '../../App.scss';
import { SubmenuProps } from './menuProps';
import Icon from '../Icons/Icon';
import SparkleIcon from '../Icons/sparkles.png';
import SubSubmenu from './SubSubmenu';
import Chevron from '../Icons/chevron.svg';

const Submenu: FunctionComponent<SubmenuProps> = ({
  name, url, subSubmenu, id,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true)
  }

  const handleMouseLeave = () => {
    setIsActive(false)
  }

  const SubmenuIcon = () => {
    if (subSubmenu) return (
      <Icon src={Chevron} width={12} height={12}
        alt="chevron-icon" className="submenu__icon--chevron" />
    )

    if (isActive) return (
      <Icon src={SparkleIcon}
        width={15} height={15} alt="sparkles-icon"
        className="submenu__icon--sparkles" />
    )

    return null;
  }

  return (
    <li className="submenu__list list"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      key={id}
    >
      <div className="submenu__link-container">
        <a href={url} className="submenu__link link">{name}</a>
        <SubmenuIcon />
      </div>
      {subSubmenu && (
        <div className={classNames('sub-submenu__container',
          { 'sub-submenu__container--open': isActive })}>
          <SubSubmenu img={subSubmenu.img} info={subSubmenu.info} url={url}/>
        </div>
      )}
    </li >
  );
}

export default Submenu;
