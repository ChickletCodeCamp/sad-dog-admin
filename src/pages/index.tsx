import { BasicLayout } from "../layouts";
import { apiGetHelloSadDog } from "../api/defaultApi";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Page = () => {
  const { data, isLoading } = useQuery("getHelloSadDog", apiGetHelloSadDog);

  if (isLoading) return <div>Loading...</div>;

  return (
    <BasicLayout.Layout>
      <div>{data}</div>
    </BasicLayout.Layout>
  );
};

const PageWithQueryProvider = () => (
  <QueryClientProvider client={queryClient}>
    <Page />
  </QueryClientProvider>
);

export default PageWithQueryProvider;
