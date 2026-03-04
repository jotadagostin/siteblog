import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 bg-slate-600">HOME</h1>

      <Link href="/users" className="text-green-950">
        Page users
      </Link>
    </div>
  );
}
