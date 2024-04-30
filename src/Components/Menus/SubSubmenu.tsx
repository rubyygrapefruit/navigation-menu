import { FunctionComponent } from 'react';
import '../../App.scss';
import { SubSubmenuProps } from './menuProps';

const SubSubmenu: FunctionComponent<SubSubmenuProps> = ({
    img, info, url
}) => {

    return (
        <div className="sub-submenu__info-container">
            <a href={url}>
                <img className="sub-submenu__img" src={img?.src} alt={img?.src}/>
            </a>
            <div className="sub-submenu__info">{info}</div>
        </div>
    );
}

export default SubSubmenu;
