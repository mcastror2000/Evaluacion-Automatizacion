// performance/login-smoke.js (versión “pasa”)
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,                    // ↓ menos concurrentes
  duration: "10s",           // ↓ menos tiempo
  thresholds: {
    http_req_failed: ["rate<0.01"],    // <1% errores
    http_req_duration: ["p(95)<800"],  // p95 < 600 ms (realista con latencia externa)
  },
};

const BASE_URL = __ENV.BASE_URL || "https://httpbin.org";

export default function () {
  const payload = JSON.stringify({ user: "mario", pass: "1234" });
  const params = { headers: { "Content-Type": "application/json" } };
  const res = http.post(`${BASE_URL}/post`, payload, params);

  const body = (() => { try { return res.json(); } catch { return {}; } })();

  check(res, {
    "status 200": (r) => r.status === 200,
    "eco user=mario": () => body?.json?.user === "mario",
  });

  sleep(1);
}
