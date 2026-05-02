import { useState } from "react";

function App() {
  const [inventoryLevel, setInventoryLevel] = useState(10);
  const [machineStatus, setMachineStatus] = useState("Idle");

  function handleSimulateOrder() {
    if (inventoryLevel <= 0) return;

    // decrease inventory
    setInventoryLevel(prev => prev - 1);

    // simulate brewing process
    setMachineStatus("Brewing");

    setTimeout(() => {
      setMachineStatus("Delivering");

      setTimeout(() => {
        setMachineStatus("Idle");
      }, 3000);

    }, 3000);
  }

  return (
    <div>
      <Header />

      <main>
        <h2>Inventory: {inventoryLevel} cups</h2>
        <h2>Status: {machineStatus}</h2>

        {inventoryLevel > 0 ? (
          <button onClick={handleSimulateOrder}>
            Simulate Order
          </button>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Out of Cups! Please Restock.
          </p>
        )}
      </main>
    </div>
  );
}