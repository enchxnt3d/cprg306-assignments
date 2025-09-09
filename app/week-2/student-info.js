import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <h2>Jonah Gile</h2>
      <Link
        href="https://github.com/enchxnt3d/cprg306-assignments"
        className="underline"
      >
        GitHub repository
      </Link>
    </section>
  );
}
