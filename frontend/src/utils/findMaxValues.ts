import type { risk_probabilities_percent } from "../types";

export function findMaxValues(data: risk_probabilities_percent) {
  const sorted = Object.entries(data!).sort(([, a], [, b]) => b - a);

  const [first, second] = sorted;

  const severityLabels: Record<string, string> = {
    Severity_1: "Sev 1",
    Severity_2: "Sev 2",
    Severity_3: "Sev 3",
    Severity_4: "Sev 4",
  };

  return {
    first: {
      severity: severityLabels[first[0]],
      probability: first[1],
    },
    second: {
      severity: severityLabels[second[0]],
      probability: second[1],
    },
  };
}
