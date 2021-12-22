import "./Home.css";
import React from "react";
import Foto from "./se.jpeg";
import pameran from "./FOTO/pameran.jpg";
import lomba from "./FOTO/lomba.png";
import pendaftaran from "./FOTO/pendaftaran.png";
import tim from "./FOTO/tim.png";

export const Home = () => {
  return (
    <div class="container">
      <div class="flex-container">
        <div>
          <h2>D3 TI PSDKU Competition</h2>
          <p id="container_desk" onclick="deskripsiatas()">
            Program Studi DIII Teknik Informatika PSDKU Madiun memiliki keunikan
            dan keunggulan di bidang teknologi informasi yang secara spesifik
            untuk mendukung pengembangan sistem dan aplikasi e-government.
            Selain berdasarkan kajian tersebut, pemerintah kabupaten madiun
            menginisiasi berdirinya DIII PSDKU sebagai upaya untuk pemenuhan
            tenaga ahli di bidang Teknologi Informasi untuk mendukung
            penyelesaian permasalahan-permasalahan di pemerintahan di era
            industri 4.0 atau Goverment 4.0.
          </p>
        </div>
        <div>
          <img
            src={tim}
            class="card-img-top"
            alt="..."
            width="70%"
            height="100px"
          />
        </div>
      </div>
      <header class="masthead clear">
        <div class="centered"></div>
      </header>

      <main class="main-area">
        <div class="center">
          <section class="cards">
            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img
                    src={pendaftaran}
                    alt="A banana that looks like a bird"
                  />
                </picture>
                <div class="card-content">
                  <h2>Pendaftaran Lomba</h2>
                  <p>
                    Lomba ini memiliki 3 jenis yaitu lomba cyber crime, web
                    developer, dan ui design. Lomba ini dapat dilakukan secara
                    individu atau tim. Untuk lebih detailnya bisa dilihat pada
                    poster pendaftaran
                  </p>
                </div>
              </a>
            </article>

            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img src={pameran} alt="Norwegian boller" />
                </picture>
                <div class="card-content">
                  <h2>Pameran Teknologi</h2>
                  <p>
                    Pameran dan lomba ini dimaksudkan sebagai wadah sosialisasi
                    dan diseminasi produk teknologi serta perkembangannya agar
                    diketahui masyarakat. Pameran ini akan dilaksanakan sekitar
                    3 hari.
                  </p>
                </div>
              </a>
            </article>

            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img
                    src={lomba}
                    alt="A dinosaur wearing an aluminium jacket"
                  />
                </picture>
                <div class="card-content">
                  <h2>Pelaksanaan Lomba</h2>
                  <p>
                    Lomba akan dilaksanakan sesuai dengan jadwal yang telah di
                    informasikan kepada grup masing-masing. Setiap lomba
                    memiliki tatatertib yang wajib di patuhi oleh semua peserta.
                    Jika terdapat kendala silahkan menghubungi panitia.
                  </p>
                </div>
              </a>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};
