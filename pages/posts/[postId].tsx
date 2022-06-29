import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailsProps {}

export default function PostDetails(props: PostDetailsProps) {
  const router = useRouter();
  return (
    <div>
      <h2>Details page</h2>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
