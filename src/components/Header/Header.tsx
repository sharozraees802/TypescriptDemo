/**
 *
 * @func Header
 * this is the header component to use a interface
 */

/* import React from 'react'*/

// interface IHeader {
//     name: string
// }

// export const Header = ({ name }: IHeader) => {

// return (

//     <h1 style={{backgroundColor: 'green'}}>{name}</h1>

// )

// }

import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <h1>Getting Started with React Using TypeScript</h1>
    </div>
  );
};
