import { describe, it, expect } from "vitest";
import { AgentHub } from "../src/agentHub.js";

describe("AgentHub", () => {
  it("initializes", () => {
    const instance = new AgentHub();
    expect(instance.getStats().totalOps).toBe(0);
  });

  it("tracks operations", async () => {
    const instance = new AgentHub();
    await instance.registerskill();
    expect(instance.getStats().totalOps).toBe(1);
  });

  it("resets state", async () => {
    const instance = new AgentHub();
    await instance.registerskill();
    instance.reset();
    expect(instance.getStats().totalOps).toBe(0);
  });
});
