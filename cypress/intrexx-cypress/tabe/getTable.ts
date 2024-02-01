export const getTable = (subject: string) => {
  return cy.get(subject, { log: false }).then((table) => {
    let headers = [];
    let rows: string[][] = [];
    let rowsElements: JQuery<HTMLElement>[][] = [];
    return cy
      .wrap(table, { log: false })
      .get(subject + " > thead th", { log: false })
      .each((element) => {
        headers.push(element.text());
      })
      .then(() => {
        cy.wrap(table, { log: false })
          .get(subject + " > tbody tr", { log: false })
          .each(($rowElm) => {
            let row = [];
            let rowElms = [];
            cy.wrap($rowElm, { log: false })
              .find("td", { log: false })
              .each(($celElm) => {
                rowElms.push($celElm);
                row.push($celElm.text());
              });
            rowsElements.push(rowElms);
            rows.push(row);
          })
          .then(() => {
            const data = rows.reduce((acc, item) => {
              return [
                ...acc,
                item.map((val, index) => ({ [headers[index]]: val })),
              ];
            }, []);

            return { headers, rows, data, rowsElements };
          });
      }) as unknown as Cypress.Chainable<{
      headers: typeof headers;
      rows: typeof rows;
      data: any;
      rowsElements: typeof rowsElements;
    }>;
  });
};
