import Image from 'next/image';
import Link from 'next/link';
import layoutStyle from '../styles/layout.module.scss';
import styles from "../styles/layout.module.scss";
import logoImage from '../public/images/mainLogo.svg';
const Header = ({ isHome }) => {
  const nav = [
    // {
    //   title: 'Blog',
    //   path: '/blog'
    // },
    // {
    //   title: 'News',
    //   path: '/news'
    // },
    {
      title: 'Profile',
      path: '/profile'
    }
  ]
  return (
    <header className={layoutStyle.header}>
      <div className={layoutStyle.container}>
        <h1 className={layoutStyle.headerLogo}>
          <Image src={logoImage} width={70} height={70} alt="home logo"></Image>
        </h1>
        {isHome ? <ul className={layoutStyle.navList}>
          {
            nav.map(({ title, path }) => (
              <li>
                <Link href={path}>{title}</Link>
              </li>
            ))
          }
        </ul> :  <div className={layoutStyle.navList}>
          <Link href="/">Back</Link>
        </div> }
      </div>
    </header>
  )
}

export default Header;