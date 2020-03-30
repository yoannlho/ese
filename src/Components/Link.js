/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonLink() {
  return (
    <Link
      component="ButtonSizes"
      variant="body2"
      onClick={() => {
        window.location = "https://www.esiea.fr/esiea-secure-edition-2017/";
      }}
    >
      Button Link
    </Link>
  );
}
