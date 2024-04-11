import "./Characters.css";

import { FC, useState } from "react";

import TextInput from "@/components/TextInput";
import TopCard from "@/components/TopCard";
import useGetCharacters from "@/hooks/useGetCharacters";
import useGetEpisodes from "@/hooks/useGetEpisodes";
import useGetLocations from "@/hooks/useGetLocations";

import CharactersTable from "./components/CharactersTable";

const Characters: FC = () => {
  const [filters, setFilters] = useState({
    search: "",
  });

  const { data: charactersData } = useGetCharacters();
  const { data: locationsData } = useGetLocations();
  const { data: episodesData } = useGetEpisodes();

  return (
    <>
      <h1 className="h3 mb-2 text-gray-800 mb-4">Characters</h1>
      <div className="row">
        <TopCard
          title="CHARACTER COUNT"
          text={charactersData?.data.info.count.toString()}
          icon="user"
          class="primary"
        />
        <TopCard
          title="LOCATION COUNT"
          text={locationsData?.data.info.count.toString()}
          icon="map"
          class="danger"
        />
        <TopCard
          title="EPISODE COUNT"
          text={episodesData?.data.info.count.toString()}
          icon="film"
          class="success"
        />
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex justify-content-between">
              <h6 className="m-0 font-weight-bold text-green">
                Character List
              </h6>
              <TextInput
                required={false}
                onChange={({ value }) =>
                  setFilters({
                    ...filters,
                    search: value,
                  })
                }
                id="search"
                label="Search"
                placeholder=""
                value={filters.search}
                maxLength={40}
                field="search"
                className="d-flex align-items-center search-gap"
              />
            </div>
            <div className="card-body">
              <CharactersTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
