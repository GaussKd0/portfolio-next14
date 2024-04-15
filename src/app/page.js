
import Header from "./components/Header";
import Body from "./components/Body";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="overflow-y-scroll h-screen bg-gradient-to-b from-[#141e30] to-[#243b55]">
      <Header/>
      <Body/>
      <Skills/>
      <Contact/>
    </main>
  );
}
