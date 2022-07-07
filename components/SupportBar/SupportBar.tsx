import React, { useState } from 'react';

type Props = {
  telNumber: string;
};

function SupportBar({ telNumber }: Props) {
  let numTelDef: string;
  const numString = telNumber.toString();

  if (numString.length > 10) {
    numTelDef = numString.substring(numString.length - 10);
  } else if (numString.length === 10) {
    numTelDef = numString;
  } else {
    numTelDef = '0000000000';
  }
  numTelDef = `+57-${numTelDef.substring(0, 3)}-${numTelDef.substring(3, 6)}-${numTelDef.substring(6, 10)}`;

  return (
    <div className='hero__search__phone'>
      <div className='hero__search__phone__icon'>
        <i className='fa fa-phone' />
      </div>
      <div className='hero__search__phone__text'>
        <h5>{numTelDef}</h5>
        <span>support 24/7 time</span>
      </div>
    </div>
  );
}

export default SupportBar;
