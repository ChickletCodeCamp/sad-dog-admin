import { useState, useEffect } from "react";
import { BasicLayout } from "../layouts";
import { apiGetHelloSadDog } from "../api/defaultApi";

const Page = () => {
  const [helloSadDog, setHelloSadDog] = useState("");

  useEffect(() => {
    apiGetHelloSadDog("").then(setHelloSadDog);
  }, []);

  return (
    <BasicLayout.Layout>
      <div>{helloSadDog}</div>
    </BasicLayout.Layout>
  );
};

export default Page;
