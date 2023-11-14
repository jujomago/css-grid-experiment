import React, { useEffect } from "react";

export const Navbar: React.FC<{
  onHandleClick: () => void;
  user: { name: string; age: number };
}> = React.memo(({ onHandleClick, user }) => {
  console.log("rendering Navbar");
  /*     useEffect( () => {
        console.log('running effect')
        const number = fetch("https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
        ).then((data)=>data).then((res) => res.text());
    });
     */

  return (
    <nav>
      <h2>soy el nav, user: {user.name} , age {user.age}</h2>
      <button onClick={onHandleClick}>toggle sidebar</button>
    </nav>
  );
});
