import { useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(false)}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
      >
        Clica ni mi
      </button>
      <div style={{ display: open ? "block" : "none" }}>
        <div>
          <img src="/nois.png" alt="Nois dois junto!" />
        </div>
        <p>Tinhamu!!!</p>
      </div>
    </div>
  );
}

export default Home;
