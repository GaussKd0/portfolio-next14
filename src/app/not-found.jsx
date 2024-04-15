import Link from "next/link";

export default function NotFound() {
  return (
    <main className="overflow-y-scroll h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#141e30] to-[#243b55] text-white">
      <h2 className="text-3xl mb-4 text-center">Houve um problema :(</h2>
      <p className="mb-4 text-center">Não foi possível encontrar a página que você estava procurando.</p>
      <p className="mb-2 text-center">Volte para a página inicial</p>
      <Link href="/" className="text-emerald-400 text-center">Clique Aqui</Link>
    </main>
  );
}
