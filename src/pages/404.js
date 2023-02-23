import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  });

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sorry, looks like this page cannot be found</h2>
      <div>
        Redirecting you to the{' '}
        <Link href="/" legacyBehavior>
          Homepage
        </Link>
      </div>
      <style>
        {`
          .not-found {
            background: #fff;
            padding: 30px;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            transform: rotateZ(-1deg);
          }
          h1 {
            font-size: 3em;
          }
        `}
      </style>
    </div>
  );
}
