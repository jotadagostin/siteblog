import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const segments = router.query.slug as string[];

  return (
    <div>
      <h1>post: {segments?.join("/")}</h1>
    </div>
  );
}
