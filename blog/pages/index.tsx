import Link from "next/link";

export default function Blog() {
  const APP_URL = process.env.APP_URL as string;
  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
      <Link href={`${APP_URL}`}>Home</Link>
    </div>
  );
}
