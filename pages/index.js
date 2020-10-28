import Head from "next/head";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl text-red-500">Hello</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://dream-okc-staging.begin.app/todos");
  const data = await res.json();
  return {
    props: { data },
  };
}
