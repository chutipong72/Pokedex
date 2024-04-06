import React from "react";
import { IPokemonDetailResponse, Type } from "@/interface/pokemonDetail";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  image: string;
  id: number;
  types: Type[];
  name: string;
}

const PokemonCard = ({ image, id, types, name }: PokemonCardProps) => {
  return (
    <div className="bg-[#253641] rounded-[20px] overflow-hidden shadow dark:border-gray-700 p-[16px] max-w-[275px] w-full m-[auto]">
      <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square bg-cover rounded-[20px]">
        <Link to={`/detail/${name}`}>
          <img
            className="rounded-t-lg h-[218px] p-[40px] w-full"
            src={image}
            alt=""
          />
        </Link>
      </div>
      <div className="pt-5">
        <div className="flex justify-between">
          <h5 className="capitalize mb-2 text-xl font-bold tracking-tight text-white ">
            {name}
          </h5>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white ">
            #{id}
          </h5>
        </div>
        <div className="flex gap-2 justify-end mt-[16px]">
          {types.map((item) => {
            return (
              <span
                className={`badge-type-${item.type.name} capitalize px-[14px] py-1 rounded-[16px]`}
              >
                {item.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
