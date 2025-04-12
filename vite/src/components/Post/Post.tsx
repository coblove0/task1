import { z } from 'zod';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export const fetchPost = async (id: number): Promise<TPost> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const parsedData = postSchema.parse(response.data);
  return parsedData;
};

export const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type TPost = z.infer<typeof postSchema>;

const Post: React.FC<{ id: number }> = ({ id }) => {
  const { data, error, isLoading } = useQuery<TPost, Error>({
    queryKey: ['post', id], // Используйте queryKey вместо массива
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error instanceof Error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
