import React from 'react'

export const Sidebar:React.FC< {open:boolean }> = ({open}) => {
console.log('rendering sidebar')
  return (
    <aside className={open?'opened':'closed'} >
    <h2>soy el sidebar</h2>
  </aside>
  )
}
 