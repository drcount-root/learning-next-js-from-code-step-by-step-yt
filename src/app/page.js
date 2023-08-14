"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const coolFunc = x => {
    console.log(x, '=> working')
  }
  
  const User = ({name}) => {
    return (
      <div>
        <h2>User name is {name}</h2>
      </div>
    );
  };

  const funcT = (y) => {
    return 5+y;
  }

  return (
    <main className={styles.main}>
      <User name="Jack Ryan"/>
      <h1>Home Page</h1>
      <button onClick={()=>alert("button click works")}>Click Me</button>
      <button onClick={()=>coolFunc(68)}>test</button>
      {funcT('10')} {funcT(-'10')} {funcT(+'10')}
    </main>
  );
}