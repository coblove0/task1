import React from 'react';
import MyTab from 'components/MyTab/MyTab';
import MyButton from 'components/MyButton/MyButton';
import MyRating from 'components/MyRating/MyRating';
import MyDatePicker from 'components/MyDatePicker/MyDatePicker';
import MyModal from 'components/MyModal/MyModal';

function App() {
  return (
    <div>
      <h3>
        <MyTab />
      </h3>
      <h3>
        <MyButton />
      </h3>
      <h3>
        <MyRating />
      </h3>
      <h3>
        <MyDatePicker />
      </h3>
      <h3>
        <MyModal />
      </h3>
    </div>
    // <div>
    //   <h1>Добро пожаловать в Vite + React!</h1>
    //   <p>Это главная страница вашего приложения.</p>
    // </div>
  );
}

export default App;
