import React from "react";
import { useMutation } from "react-query";
import LoginForm from "../../components/login/LoginForm";
import { LoginUserDto } from "../../models/apiModels";
import { apiLogin } from "../../api/authAPI";

const Login: React.FC = () => {
  const loginMutation = useMutation(apiLogin);

  const handleFinish = (values: LoginUserDto) => {
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        console.log("登入結果", res);
      },
      onError: (error) => {
        // Handle error here
        console.error("登入錯誤", error);
      },
    });
  };

  return <LoginForm onFinish={handleFinish} />;
};

export default Login;
