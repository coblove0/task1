import React from 'react';

interface UserProfileProps {
  name?: string;
  avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar }) => {
  return (
    <div>
      {avatar && <img src={avatar} alt="Аватар пользователя" style={{ borderRadius: '50%' }} />}
      <h2>{name || 'Имя пользователя не указано'}</h2>
    </div>
  );
};

export default UserProfile;