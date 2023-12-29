import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import LoginForm from '../../components/login/LoginForm';
import { LoginUserDto } from '../../models/apiModels';
import { apiLogin } from '../../api/authAPI';
import { routerPath } from '../../models/routerModel';
import { Dao, CookieDao } from '../../utils/dao';
import styles from '../../components/login/loginForm.module.css';

const Login: React.FC = () => {
  const navigate = useNavigate(); // Create the navigate function
  const loginMutation = useMutation(apiLogin);

  const handleFinish = (values: LoginUserDto) => {
    loginMutation.mutate(values, {
      onSuccess: res => {
        console.log('登入結果', res);
        const dao: Dao = new CookieDao();
        dao.create('lgg', true);
        navigate(routerPath.home.toString()); // Navigate to home on success
      },
      onError: error => {
        // Handle error here
        console.error('登入錯誤', error);
      }
    });
  };

  return (
    <div className={styles.loginBackground}>
      <LoginForm onFinish={handleFinish} />
    </div>
  );
};

export default Login;
