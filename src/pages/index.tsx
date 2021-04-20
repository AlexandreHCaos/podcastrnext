// SSR
// SSG

import { useEffect } from "react";

export default function Home(props) {
  // SPA
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, []);

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SSR Utilizada quando se precisa da resposta sempre atualizada
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

//SSR Utilizada quando não se precisa da resposta sempre atualizada
// Revalidate é o tempo de atualização da resposta
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}