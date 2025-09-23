import Link from "next/link";

export default function Home() {
  let linkStyles = "text-blue-600 underline";

  return (
    <main>
      <h1>CPRG 306: Web Development 2 - assignments</h1>
      <ul>
        <li>
          <Link className={linkStyles} href="./week-2">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="./week-3">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="./week-4">
            Week 4 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
