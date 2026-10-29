import { getCarts } from "./carts/api";
import { getRankingReport } from "./reports/ranking";

const carts = await getCarts();

getRankingReport(carts);
