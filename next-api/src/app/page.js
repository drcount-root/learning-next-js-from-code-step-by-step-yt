import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/products">All Products</Link>
      <Link href="/addproduct">Add Product</Link>
    </main>
  );
}
