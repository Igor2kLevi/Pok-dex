import Image from "next/image"

import Card from "../components/Card"

export async function getStaticProps() {
  const maxPokemons = 905;
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1 
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
      <div>
        <div className="flex justify-center mb-8 text-center">
          <h1 className="text-5xl font-bold text-red-600 mr-2">Poké<span className="text-zinc-800">Dex</span></h1>
          <Image src="/images/pokeball.png" width="55" height="55" alt="PokeNext" />
        </div>
        <div className="flex flex-wrap justify-between items-center max-w-7xl m-auto">
          {pokemons?.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
  )
}
