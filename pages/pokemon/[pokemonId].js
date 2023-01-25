import Image from "next/image";

import styles from "../../styles/Types.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 905;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //params

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className="text-center bg-zinc-600 w-96 m-auto rounded-xl">
      <h1 className="text-4xl font-bold capitalize p-2 mx-auto my-3 w-80 bg-zinc-800 text-gray-100 rounded-b-lg">
        {pokemon.name}
      </h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="300"
        height="300"
        alt={pokemon.name}
        className="m-auto"
      />
      <div className="bg-zinc-800 text-gray-100 w-96 m-auto rounded-xl p-2 mt-3">
        <div className="flex items-center justify-center mb-2">
          <div className="mr-20 text-lg">
            <h3 className="text-xl">Númuro:</h3>
            <p>#{pokemon.id}</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="my-4 px-2 flex items-center justify-center flex-col border-r-2 border-gray-300 text-lg">
              <h4>Altura:</h4>
              <p>{pokemon.height * 10} cm</p>
            </div>
            <div className="px-2 text-lg">
              <h4>Peso:</h4>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="mb-1 text-lg">Tipo:</h3>
          <div className="flex items-center justify-center">
            {pokemon.types.map((item, index) => (
              <span
                key={pokemon.index}
                className={`px-10 py-2 mr-2 text-gray-100 bg-yellow-400 border border-gray-300 rounded-md uppercase text-sm font-medium ${
                  styles["type_" + item.type.name]
                }`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
