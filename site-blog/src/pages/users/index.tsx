import Image from "next/image";
import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <h2>Users</h2>
      <Link href="/" className="text-green-700">
        Go back home
      </Link>
      <Image
        src="/assets/dev-image.jpg"
        alt="Engaging Product Announcements"
        width={500}
        height={300}
      />
    </div>
  );
}
