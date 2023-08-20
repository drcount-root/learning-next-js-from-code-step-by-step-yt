"use client";
import Image from "next/image";
import styles from "./page.module.css";
import User from "./components/User";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const coolFunc = (x) => {
    console.log(x, "=> working");
  };

  const funcT = (y) => {
    return 5 + y;
  };

  return (
    <main className={styles.main}>
      <User name="jack_ryan" />
      <h1>Home Page</h1>
      <button onClick={() => alert("button click works")}>Click Me</button>
      <button onClick={() => coolFunc(68)}>test</button>
      {funcT("10")} {funcT(-"10")} {funcT(+"10")}

      <Link href="/about" style={{color: "blue"}}>Go To About Page</Link>

      <button onClick={() => router.push("/login")}>Go to login page</button>
    </main>
  );
}
