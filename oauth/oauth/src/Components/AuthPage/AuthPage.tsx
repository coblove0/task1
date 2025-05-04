import { useEffect, useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';

const clientId = '2dfdf0cac2cb410cbd75db58e2048dcc';
const clientSecret = '36cbe740ecc1443c8567063b8dc5e7e5';
const redirectUri = 'http://localhost:3000/auth';

function AuthPage() {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<{ name?: string; avatar?: string } | null>(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(new URL(currentUrl).search);
    const codeValue = urlParams.get('code');

    if (codeValue) {
      fetchToken(codeValue);
    } else if (!token) {
      window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  const fetchToken = async (codeValue: string) => {
    const base64Credentials = btoa(`${clientId}:${clientSecret}`);
    const body = new URLSearchParams();
    body.append('grant_type', 'authorization_code');
    body.append('code', codeValue);
    body.append('client_id', clientId);
    body.append('client_secret', clientSecret);

    try {
      const response = await fetch('https://oauth.yandex.ru/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${base64Credentials}`,
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      console.error('Ошибка при получении токена:', error);
    }
  };

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const response = await fetch('https://login.yandex.ru/info?format=json', {
        headers: {
          Authorization: `OAuth ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка получения профиля: ${response.statusText}`);
      }

      const userInfo = await response.json();
      setUserInfo({
        name: userInfo.real_name,
        avatar: userInfo.default_avatar_id
          ? `https://avatars.yandex.net/get-yapic/${userInfo.default_avatar_id}/islands-200`
          : undefined,
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      {userInfo ? (
        <UserProfile name={userInfo.name} avatar={userInfo.avatar} />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default AuthPage;