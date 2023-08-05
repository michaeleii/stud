import Link from "next/link";

function NotFound() {
  return (
    <div className="space-y-5 text-center">
      <h1>Oops ....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">homepage</Link>
      </p>
    </div>
  );
}
export default NotFound;
