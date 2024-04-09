import React, {Fragment, useState} from "react";
import TopCard from "../../common/components/TopCard";
import "./Characters.css";
import TextInput from "../../common/components/TextInput";

const Characters: React.FC = () => {
  const [filters, setFilters] = useState({
    search: "",
  })

  return (
    <Fragment>
      <h1 className="h3 mb-2 text-gray-800 mb-4">Characters</h1>
      <div className="row">
        <TopCard title="CHARACTER COUNT" text={"99"} icon="user" class="primary" />
        <TopCard title="LOCATION COUNT" text={"133"} icon="map" class="danger" />
        <TopCard title="EPISODE COUNT" text={"231"} icon="film" class="success" />
      </div>

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex justify-content-between">
              <h6 className="m-0 font-weight-bold text-green">Character List</h6>
              <TextInput required={false} onChange={({ value }) => setFilters({
                ...filters,
                search: value,
              })} id={'search'} label={'Search'} placeholder={''} value={filters.search} maxLength={40} field={'search'} className={"d-flex align-items-center search-gap"} />
            </div>
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
};

export default Characters;
