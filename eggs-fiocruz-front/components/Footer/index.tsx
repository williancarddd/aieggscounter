import Image from 'next/image';

import epiamo from '@/public/epiamo-black.png';
import fiocruzROLogo from '@/public/fiocruz-ro.png';
import labioquimLogo from '@/public/labioquim.png';
import unir from '@/public/Logo_UNIR_Horizontal_01.png';

import classes from './style.module.css';

export function Footer() {
  return (
    <div className={classes.makers}>
      <Image alt="" className={classes.makerImage} src={labioquimLogo} />
      <Image alt="" className={classes.makerImage} src={fiocruzROLogo} />
      <Image alt="" className={classes.makerImageEpi} src={epiamo} />
      <Image alt="" className={classes.makerImage} src={unir} />
    </div>
  );
}
