import React, { useState, useEffect } from "react";
import { getAll, getByName } from "./api";

import Switch from "@mui/material/Switch";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleChange = (id) => {
    const aaa = data.map((p) =>
      id === p.id ? { ...p, stch: !p.stch } : { ...p }
    );
    setData(aaa);
  };

  useEffect(() => {
    getAll().then(setData);
  }, []);

  const onSetSearch = (evt) => {
    setSearch(evt.target.value);

    const lcSearch = search.toLowerCase();
    setData(
      data.filter(({ name }) => {
        console.info(name, lcSearch);
        return name.toLowerCase().includes(lcSearch);
      })
    );
  };

  useEffect(() => {
    getByName(search).then(setData);
  }, [search]);

  return (
    <div className="grid-container">
      <div>
        Buscador:{" "}
        <input type="text" value={search} onChange={onSetSearch}></input>
      </div>
      <ul>
        {data.map((d) => (
          <li key={data.id}>
            <div>{d.name}</div>
            <div>
              <Switch
                {...label}
                onChange={() => handleChange(d.id)}
                checked={d.stch}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
