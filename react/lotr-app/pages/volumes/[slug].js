import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail({ volume }) {
  const { title, description, books, cover, slug } = volume;

  const volumeIndex = volumes.findIndex((v) => v.slug === slug);

  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`Cover of ${title}`} width={140} height={230} />
      <div>
        {prevVolume && (
          <Link href={`/volumes/${prevVolume.slug}`}>
            Previous Volume: {prevVolume.title}
          </Link>
        )}
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title}
          </Link>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const volume = volumes.find(({ slug }) => slug === params.slug);

  if (!volume) {
    return { notFound: true };
  }

  return {
    props: {
      volume,
    },
  };
}

export async function getStaticPaths() {
  const paths = volumes.map((volume) => ({
    params: { slug: volume.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
