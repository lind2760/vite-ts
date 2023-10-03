import { useLoaderData } from "react-router";

function Home() {
  const data = useLoaderData();
  console.log(data);
  const a = "test";
  console.log(`${a}` + "12345");
  return <div>首页</div>;
}

export default Home;
