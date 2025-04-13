import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const fetchComments = async (postId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return response.data;
};

interface CommentsProps {
  postId: number; // ID поста, для которого мы получаем комментарии
}

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['comments', postId], // Используем объект для ключа запроса
    queryFn: () => fetchComments(postId), // Функция для получения данных
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <button onClick={() => refetch}>Обновить комментарии</button>
      <ul>
        {data.map((comment: { id: number; name: string; body: string }) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
