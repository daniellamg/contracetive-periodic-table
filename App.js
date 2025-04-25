import React, { useState } from "react";

function Card({ children, className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl bg-white p-4 shadow-md border transition hover:shadow-lg cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

const categories = [
  "All",
  ...Array.from(new Set(contraceptives.map((c) => c.group)))
];
const durations = [
  "All",
  ...Array.from(new Set(contraceptives.map((c) => c.duration)))
];

export default function PeriodicTableOfContraceptives() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [stiOnly, setStiOnly] = useState(false);

  const filtered = contraceptives.filter(
    (item) =>
      (category === "All" || item.group === category) &&
      (duration === "All" || item.duration === duration) &&
      (!stiOnly || item.stiProtection) &&
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase()) ||
        item.group.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by name, group, or symbol..."
        className="mb-4 p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={\`px-3 py-1 rounded-full text-sm border \${category === cat ? "bg-black text-white" : "bg-white text-black"}\`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {durations.map((d) => (
          <button
            key={d}
            className={\`px-3 py-1 rounded-full text-sm border \${duration === d ? "bg-black text-white" : "bg-white text-black"}\`}
            onClick={() => setDuration(d)}
          >
            {d}
          </button>
        ))}
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={stiOnly}
            onChange={() => setStiOnly(!stiOnly)}
          />
          <span>STI Protection</span>
        </label>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {filtered.map((item) => (
          <Card
            key={item.symbol}
            className={\`text-center \${item.color}\`}
            onClick={() => setSelected(item)}
          >
            <div className="text-xl font-bold">{item.symbol}</div>
            <div className="text-xs mt-1">{item.name}</div>
            <div className="text-[10px] italic mt-1">{item.group}</div>
          </Card>
        ))}
      </div>
      {selected && (
        <div className="mt-6 p-4 bg-white border rounded-lg shadow">
          <h2 className="text-lg font-semibold">{selected.name}</h2>
          <p className="text-sm text-gray-700 mt-2">{selected.description}</p>
          <p className="text-sm text-gray-600 mt-1"><strong>Effectiveness:</strong> {selected.effectiveness}</p>
          <p className="text-sm text-gray-600 mt-1"><strong>Contraindications:</strong> {selected.contraindications}</p>
        </div>
      )}
    </div>
  );
}
