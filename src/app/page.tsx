import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link rel="stylesheet" href="/work">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Work{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
    </main>
  );
}
