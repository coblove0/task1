import React from 'react';
import MyTab from 'components/MyTab/MyTab';
import MyButton from 'components/MyButton/MyButton';
import MyRating from 'components/MyRating/MyRating';
import MyDatePicker from 'components/MyDatePicker/MyDatePicker';
import MyModal from 'components/MyModal/MyModal';
import MyCard from 'components/MyCard/MyCard';
import PostList from 'components/PostList/PostList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <PostList />
      </QueryClientProvider>
    </div>
    // <div>
    //   <h1>Первая домашка</h1>
    //   {/* стили Chakra-ui перекрывают стили tailwind поэтому тут закомментировано нужно показывать или
    //   этот компонент или MyModal
    //   <h3>
    //     <MyTab />
    //   </h3> */}
    //   <h3>
    //     <MyButton />
    //   </h3>
    //   <h3>
    //     <MyRating />
    //   </h3>
    //   <h3>
    //     <MyDatePicker />
    //   </h3>
    //   <h3>
    //     <MyModal />
    //   </h3>
    //   <h1>Третья домашка</h1>
    //   <MyCard />
    // </div>
  );
}

export default App;
