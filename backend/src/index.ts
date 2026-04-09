import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Claritron API running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
