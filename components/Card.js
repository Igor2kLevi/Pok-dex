import Image from "next/image"
import Link from "next/link"

export default function Card({ pokemon }) {
    return(
        <div className="flex justify-center items-center flex-col px-12 py-4 mb-8 mr-2 rounded-2xl border-2 border-red-600 shadow-3xl bg-zinc-800 text-gray-100">
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
            />
            <p className="mx-4 bg-red-600 rounded-md p-1 mb-1 text-gray-100 flex justify-center items-center">#{pokemon.id}</p>
            <h3 className="capitalize mb-4 text-xl font-bold">{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className="bg-gray-100 text-zinc-800 px-4 py-3 mb-4 rounded-md font-bold text-lg transition delay-100 hover:bg-red-600 hover:text-gray-100">Detalhes</Link>
        </div>
    )
}