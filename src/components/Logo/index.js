import React from 'react';
import style from './style.module.css';

function Logo() {
  return (<div className={style.Wrapper}>
      <div className={style.Name}>
        κXβ
      </div>
      <span className={style.NameAfter}>react</span>
    </div>);
}

export default Logo;
