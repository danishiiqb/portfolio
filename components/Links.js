import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Links({ href, src, dimensions }) {
  return (
    <Link passHref href={href}>
      <a
        style={{
          marginLeft: '4.4rem',
        }}
        target='_blank'
      >
        <Image
          alt=''
          src={src}
          width={dimensions.width}
          height={dimensions.height}
        />
      </a>
    </Link>
  );
}

export default Links;
