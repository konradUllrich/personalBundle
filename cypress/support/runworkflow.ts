export function runWorkflow({
  id,
  payload,
  name,
}: {
  id: string;
  name?: string;
  payload?: any;
}) {
  const label = `${name ? name : id}`;

  const startTime = Date.now();

  const log = Cypress.log({
    name: "runningWorkflow",
    displayName: `${name ? name : "Running Workflow"}`,
    message: [`💸 start`],
    // @ts-ignore
    autoEnd: false,
    consoleProps() {
      return payload;
    },
  });
  return cy.window({ log: false }).then((window) => {
    log.snapshot("before");
    //@ts-ignore
    if (typeof window.triggerUserWorkflowEvent === "function") {
      return window //@ts-ignore
        .triggerUserWorkflowEvent(id, payload)
        .then(() => {
          log.snapshot("after");

          Cypress.log({
            name: "runningWorkflow",
            displayName: label,
            message: `done ${Date.now() - startTime}ms`,
          });

          log.end();
        })
        .catch(() => {
          log.end();
        });
    } else {
      cy.log(`Workflow run not possible`);
    }
  });
}
