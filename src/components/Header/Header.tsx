import React from 'react'

interface IHeader {
    name: string
}

export const Header = ({ name }: IHeader) => {

return (

    <h1 style={{backgroundColor: 'green'}}>{name}</h1>

)

}

