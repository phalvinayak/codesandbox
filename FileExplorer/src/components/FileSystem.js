import { useState } from "react";

export default function FileSystem({ files }) {
  const [expand, setExpand] = useState(true);

  if (files.isDir) {
    return (
      <ul>
        <li
          onClick={() => setExpand(!expand)}
          style={{ listStyleType: "square", cursor: "pointer" }}
        >
          {files.name}
        </li>
        <div style={{ display: expand ? "block" : "none" }}>
          {files.items.map((item) => {
            return <FileSystem key={item.name} files={item} />;
          })}
        </div>
      </ul>
    );
  } else {
    return (
      <ul>
        <li style={{ listStyleType: "circle" }}>{files.name}</li>
      </ul>
    );
  }
}
