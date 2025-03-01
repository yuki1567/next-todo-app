"use client";

import AddIcon from "@mui/icons-material/Add";

export default function InputForm() {
  return (
    <div className="my-0 mx-auto flex items-stretch justify-center">
      <form>
        <input
          type="text"
          className="w-60 py-1 px-2 border border-gray-300 rounded-sm flex-grow"
        />
        <button className="bg-blue-500 py-1 px-2">
          <AddIcon
            className="flex items-center justify-end"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              justifyContent: "end",
            }}
          />
        </button>
      </form>
    </div>
  );
}
