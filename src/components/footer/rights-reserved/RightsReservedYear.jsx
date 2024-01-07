"use-client"

import React from 'react';

/*
TODO: Move this into a geneal Folder & Change the component name.
*/

export default function RightsReservedYear() {
  const year = new Date().getFullYear();

  return (
    <span>{year}</span>
  );
}