// Welcome Screen

import { Navbar } from "../components/navbar";
import { AutoCarrossel } from "../components/home/carrossel";
import { Noticias } from "../components/home/cardNoticias";
import { Banner } from "../components/home/banner";
import { Rodape } from "../components/footer";

export default function Home() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <AutoCarrossel />
      <div class="container mt-5">
        <h1>Noticias</h1>
        <hr className="my-3"></hr>
        <Noticias />
        <Banner />
      </div>
      <Rodape />
    </div>
  );
}
