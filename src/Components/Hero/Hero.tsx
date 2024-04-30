import '../../App.scss';
import { FunctionComponent } from 'react';
import { Heroprops } from './Heroprops';

const Hero: FunctionComponent<Heroprops> = ({ title, img, className, titleClassName }) => {

  return (
    <div className={className}>
      <h1 className={titleClassName}>{title && title}</h1>
      <img src={img?.src} alt={img?.alt} />
    </div>
  );
}

export default Hero;
