import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data: { message: string }) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("Failed to reach backend:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Claritron</h1>
      <p className="text-lg opacity-80">{message}</p>
    </div>
  );
}
