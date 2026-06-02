export const logLegalAction = (action, caseId) => {
  const log = {
    timestamp: new Date().toISOString(),
    action: action,
    caseId: caseId,
    integrityHash: "SH256-READY",
  };
  console.log("[AUDIT LOG]:", log);
};
