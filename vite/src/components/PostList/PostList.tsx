import Post, { TPost } from 'components/Post/Post';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Comments from 'components/Comments/Comments';

const queryClient = new QueryClient();

function PostList() {
  const [postList, setPostList] = useState<TPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showPost, setShowPost] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setPostId(id);
    setShowPost(true);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setPostList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!showPost) {
    return (
      <div>
        <h1>Список постов</h1>
        <ul>
          {postList.map((post: TPost) => (
            <li key={post.id}>
              <button onClick={() => handleClick(post.id)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <QueryClientProvider client={queryClient}>
          <Post id={postId} />
          <div>Комментарии</div>
          <Comments postId={postId} />
        </QueryClientProvider>
      </div>
    );
  }
}

export default PostList;
