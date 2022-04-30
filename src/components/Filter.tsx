import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AppContext from "../AppContext";
import { Projects } from "../data";
import { getAllTags } from "../utils/utils";
import Dropdown from "./Dropdown";

const Filter: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { keyword, setKeyword } = React.useContext(AppContext);
  const [active, setActive] = useState<boolean>(false);

  const tags = getAllTags(Projects);

  return (
    <div className="Filter">
      <Dropdown
        active={active}
        setActive={setActive}
        trigger={
          <button className="Filter__trigger">
            <FontAwesomeIcon icon={faFilter as IconProp} />

            {keyword && (
              <>
                <span className="Filter__value">{keyword}</span>
                <span
                  className="Filter__reset"
                  onClick={() => {
                    setKeyword({ keyword: "" });
                    setTimeout(() => setActive(false), 0);
                  }}
                >
                  <FontAwesomeIcon icon={faClose as IconProp} />
                </span>
              </>
            )}
          </button>
        }
      >
        {tags.map((tagName) => (
          <Dropdown.Item
            onItemClick={() => {
              setKeyword({ keyword: tagName });
            }}
            key={tagName}
          >
            {tagName}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default Filter;
