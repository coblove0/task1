import React from 'react';

interface UserProfileProps {
  name?: string;
  avatar?: string;
  role?: string | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar, role }) => {
  return (
    <div>
      {avatar && <img src={avatar} alt="Аватар пользователя" style={{ borderRadius: '50%' }} />}
      <h2>{name || 'Имя пользователя не указано'}</h2>
      <p>Роль: {role || 'Неизвестная роль'}</p>
    </div>
  );
};

export default UserProfile;