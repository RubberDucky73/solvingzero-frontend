import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard({ article }) {
  const { title, slug, thumbnail, author, date } = article.fields;

  return (
    <div className="card">
      <div className="thumbnail">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt={thumbnail.fields.title}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p className="author">Author: {author.fields.authorName}</p>
          <p className="date">{date}</p>
        </div>
        <div className="actions">
          <Link href={`/article/${slug}`}>Read more...</Link>
        </div>
      </div>
    </div>
  );
}
