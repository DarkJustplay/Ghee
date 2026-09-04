import { spawn } from "node:child_process";

const port = process.env.PORT || "4173";
const command = `npx vite preview --host 0.0.0.0 --port ${port}`;

const child = spawn(command, { shell: true, stdio: "inherit" });

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
