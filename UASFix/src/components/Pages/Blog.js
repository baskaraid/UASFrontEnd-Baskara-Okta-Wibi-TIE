import React from "react";
import "./Button.css";
import robot from "./Robot.png";
import buku from "./Buku.png";
import code from "./FOTO/code.png";
import design from "./FOTO/design.png";
import web from "./FOTO/web.png";

export const Blog = () => {
  return (
    <div class="container">
      <div class="flex-container">
        <div>
          <h2>01. Kompetisi Cyber Security</h2>
          <p>
            Kompetisi keamanan siber nasional dengan metode online dan on-site.
            Kompetisi ini memainkan permainan Computer Network Defence,
            Penetration Test, Capture The Flag dan Forensic Analysis. Tujuan
            dari kompetisi ini adalah untuk meningkatkan kesadaran terhadap
            peningkatan pendidikan dan etika dalam keamanan informasi melalui
            serangkaian kompetisi dunia maya yang mencakup forensik, peretasan
            etis, dan pertahanan.
          </p>
          <a href="https://chat.whatsapp.com/LwrZ5UQ10WMEND4VJkHBSe" target="_blank"  class="button-21">Join Grup</a>
        </div>
        <div>
          <img
            src={code}
            class="card-img-top"
            alt="..."
            width="100%"
            height="300px"
          />
        </div>
      </div>
      <div class="flex-container">
        <div>
          <img
            src={design}
            class="card-img-top"
            alt="..."
            width="100%"
            height="300px"
          />
        </div>
        <div>
          <h2>02. Kompetisi Design UI</h2>
          <p>
            Lomba Desain Pengalaman Pengguna (UX Design) adalah lomba desain
            interaksi produk yang berorientasi pada kenyamanan dan kemudahan
            bagi pengguna. Dalam lomba ini yang menjadi fokus utama adalah
            pengalaman yang dirasakan pengguna ketika sedang menggunakan
            aplikasi tersebut secara menyeluruh. Para peserta lomba dituntut
            agar dapat merancang suatu antarmuka dan pengalaman pengguna yang
            baik dengan menggunakan metode terkait, sehingga didapatkan hasil
            desain aplikasi yang memiliki kualitas UX yang baik.
          </p>
          <a href="https://chat.whatsapp.com/LwrZ5UQ10WMEND4VJkHBSe" target="_blank"  class="button-21">Join Grup</a>
        </div>
      </div>
      <div class="flex-container">
        <div>
          <h2>03. Kompetisi Website Developer</h2>
          <p>
            Lomba Desain Website akan memperlombakan kompetensi untuk kemampuan
            peserta dalam web design dan web programming secara tim. Kemampuan
            yang dituntut adalah kemampuan bekerja dengan cepat, tepat dan
            berhasil. Tema Lomba: “Keunggulan Kader Muhammadiyah dalam Era
            Revolusi Industri 4.0”.
          </p>
          <a href="https://chat.whatsapp.com/LwrZ5UQ10WMEND4VJkHBSe" target="_blank"  class="button-21">Join Grup</a>
        </div>
        <div>
          <img
            src={web}
            class="card-img-top"
            alt="..."
            width="100%"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
};
