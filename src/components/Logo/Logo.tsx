import { Image } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <Image
      src="/images/logo/logo.png"
      alt="logo"
      width="50px"
      borderRadius="50%"
      padding={0.5}
      bgColor="#EAC563"
    />
  </Link>
);

export default Logo;
