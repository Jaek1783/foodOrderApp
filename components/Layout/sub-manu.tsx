import React from 'react';
import Link from 'next/link';
import styles from './sub-manu.module.css';

const SubManu = ({ SubList, manu, showSubMenu }) => {
  const subMenuItems = SubList.find((sub) => sub.id === manu.id)?.sub;

  if (!subMenuItems || !showSubMenu) {
    return null;
  }

  return (
    <div className={styles.subManuContainer}>
      <ul>
        {subMenuItems.map((subItem, subIndex) => (
          subItem.manu ? (
            <li key={subIndex}>
              <Link href={`/manu/${subItem.id}`}>
                {subItem.manu}
              </Link>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default SubManu;


