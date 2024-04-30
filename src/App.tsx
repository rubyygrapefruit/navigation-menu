import './App.scss';
import TopNav from './Components/Menus/TopNav';
import { menuData, homepageUrl } from './DefaultData/pageData';
import { copy, images } from './DefaultData/pageData';
import Hero from './Components/Hero/Hero';

const App = () => {
  const { title } = copy
  const { myLogo, heroImg } = images

  return (
    <div className="App">
      <nav className="menu__container">
        <a href={homepageUrl}>
          <img src={myLogo.src} className="my-logo" alt={myLogo.alt} />
        </a>
        <ul className="menu__list">
          {menuData.map((menu) => (
            <TopNav
              key={menu.id}
              id={menu.id}
              name={menu.name}
              url={menu.url}
              submenus={menu.submenus} />
          ))}
        </ul>
      </nav>
      <Hero title={title}
        img={heroImg}
        className="hero"
        titleClassName="hero__title" />
    </div>
  );
}

export default App;
