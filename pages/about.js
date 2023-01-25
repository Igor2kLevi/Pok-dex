import Image from "next/image"

export default function About() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold">Sobre o projeto</h1>
            <p className="mt-10 text-xl mb-10">Pokédex é um App construido para consultar detalhes sobre Pokémons.</p>
            <Image className="m-auto" src="/images/charizard.png" width="400" height="400" alt="Charizard"/>
        </div>
    )
}