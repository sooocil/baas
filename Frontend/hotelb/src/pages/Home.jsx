import React, { useState } from "react";
import "../css/home.css";
import { HomeNav } from "../Component/HomeNav";
import homebg1 from "../assets/homebg1.jpg";

const Home = () => {
  // console.log(rooms);
  return (
    <div className="homeContainer m-0 p-0">
      <HomeNav className="backdrop-blur-sm bg-black" />
      <div className="homeImage relative"></div>
      <h1 className="text-white absolute text-4xl top-1/2 select-none">
        Reserve Your Slice of Relaxation
      </h1>
      <div className="othercontent">
        <div className="text-white text-3xl">
          <h1>Find your perfect stay</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non,
            perspiciatis corporis exercitationem voluptas provident cumque
            quisquam aperiam at! Sit unde incidunt quidem distinctio officia
            atque impedit? Nostrum, debitis consequuntur? Similique a non neque
            officiis sed distinctio perspiciatis esse quidem dolores molestias,
            aspernatur commodi quis eius beatae eaque veniam? Totam rerum ipsum
            officiis sit vero earum tenetur dicta harum repellat! Totam,
            molestiae eveniet quibusdam ipsam mollitia aliquam quae sapiente
            officia ipsum perferendis necessitatibus dicta nemo sint error,
            magnam voluptas recusandae rem iure reprehenderit doloremque commodi
            dolore facere similique hic? Autem? Ex officia vero fugit, culpa,
            natus ea dolore a esse nisi dolor soluta voluptatem, debitis libero
            quasi eveniet quo fuga enim illo eius earum vel. Nisi tempora sint
            quia sequi? Quo, quod iste recusandae maiores, repellat debitis
            quibusdam nostrum assumenda similique unde facilis, cum excepturi ut
            blanditiis soluta est temporibus itaque aut qui libero esse quidem.
            Atque quia magnam recusandae? Repudiandae explicabo et alias tempora
            vitae perspiciatis? A sequi debitis sunt ipsa pariatur eaque.
            Adipisci asperiores modi impedit consequuntur at rerum, consequatur
            quisquam qui accusamus fugit! Nostrum esse cum adipisci. Iure qui
            dolor officiis at vitae temporibus illum error quasi vel saepe
            voluptatibus expedita adipisci maxime possimus soluta enim, aperiam
            accusamus quia hic id a corporis! Praesentium eos distinctio
            tempora. Eos, fuga. Doloremque amet, facere delectus soluta
            obcaecati, explicabo voluptas consequatur illum non accusamus quasi
            ex numquam quas nam quaerat blanditiis deleniti culpa molestiae
            animi ut deserunt. Dolorum, consequatur hic. Aliquid soluta, est
            exercitationem fugiat tempore eos placeat veniam quas similique
            earum. Illum harum quisquam similique, reprehenderit dolorum hic
            consequuntur tempore incidunt? Possimus atque reprehenderit illo
            labore doloribus adipisci dolor. Quae ullam nihil ipsam molestias.
            Praesentium, velit? Voluptas eligendi veritatis quam corporis
            consequatur tempore esse ipsam, magnam atque, alias molestiae.
            Repellat, minus! Aperiam inventore eligendi culpa sed doloremque ea
            molestiae!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
