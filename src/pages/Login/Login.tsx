import React from "react";
import LoginForm from "../../components/login/LoginForm";
import { LoginUserDto } from "../../models/apiModels";
import { apiLogin } from "../../api/authAPI";

const Login: React.FC = () => {
  const handleFinish = (values: LoginUserDto) => {
    console.log("handleFinish", values);
    apiLogin(values).then((res: any) => {
      console.log("登入結果", res);
    });
  };

  return <LoginForm onFinish={handleFinish} />;
};

export default Login;
