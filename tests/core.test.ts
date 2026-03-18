import { describe, it, expect } from "vitest";
import { SuperAgentHub } from "../src/core.js";
describe("SuperAgentHub", () => {
  it("init", () => { expect(new SuperAgentHub().getStats().ops).toBe(0); });
  it("op", async () => { const c = new SuperAgentHub(); await c.process(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new SuperAgentHub(); await c.process(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
