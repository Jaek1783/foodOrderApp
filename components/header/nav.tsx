import React, { useState } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
import SubManu from '../Layout/sub-manu';

const Navigation = ({ ManuList, SubList }) => {
  const [activeTitle, setActiveTitle] = useState('main');
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);

  const handleManuMouseOver = (id) => {
    setActiveTitle(id);
    setActiveSubMenuId(id);
  };

  const handleMouseLeave = () => {
    setActiveTitle('main');
    setActiveSubMenuId(null);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.navContainer}>
        {ManuList.map((manu, index) => (
          <li
            key={index}
            onMouseOver={() => handleManuMouseOver(manu.id)}
            onMouseLeave={handleMouseLeave}
          >
            {SubList.map((subItem, subIndex) => {
              if (subItem.id === manu.id) {
                const subLinkId = subItem.sub[0]?.id || manu.id;
                const isActiveSubMenu = activeSubMenuId === manu.id;

                return (
                  <Link
                    href={manu.id === 'e-coupon' ? `/${manu.id}`:`/${manu.id}/${subLinkId}`}
                    key={subIndex}
                    className={isActiveSubMenu ? styles.activeLink : ''}
                  >
                    {manu.title}
                  </Link>
                );
              }
            })}

            {activeTitle !== 'e-coupon' && (
              <SubManu
                manu={manu}
                SubList={SubList}
                showSubMenu={activeSubMenuId === manu.id}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
