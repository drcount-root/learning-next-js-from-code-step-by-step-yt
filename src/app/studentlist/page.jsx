import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul style={{ color: "crimson" }}>
        <li>
          <Link href="/jack">Jack</Link>
        </li>
        <li>
          <Link href="/tony">Tony</Link>
        </li>
        <li>
          <Link href="/peter">Peter</Link>
        </li>
        <li>
          <Link href="/james">James</Link>
        </li>
      </ul>
    </div>
  );
}
