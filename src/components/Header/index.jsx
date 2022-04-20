import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';
import images from 'constants/images';
import styles from './styles.module.scss';

const Header = ({ info }) => {
  return (
    <div className={cn(styles.header, 'section_padding')} id='home'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={styles.wrapper_info}>
          <SubHeading title={info?.metadata?.section} /> 
          <h1 className={styles.header_h1}>{info?.metadata?.title}</h1>
          <p className={cn(styles.header_p, 'opensans')}>{info?.metadata?.intro}</p>
          <Button name='Explore Menu' path='#menu' />
        </div>
        <div className='app_wrapper_img'>
          <div className={cn(styles.wrapper_img, 'img_padding')} >
            <Image
              src={info?.metadata?.baner?.imgix_url || images?.header}
              alt='header_img'
              objectFit='cover'
              width={600}
              height={500}
              />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;