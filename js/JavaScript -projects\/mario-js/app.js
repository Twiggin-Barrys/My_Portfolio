function printReports(intro, body, outro) {
  printCostReport(function (intro) {
    return intro.lenth * 2 + intro;
  });
  printCostReport(function (body) {
    return body.length * 3 + body;
  });
  printCostReport(function (outro) {
    return outro.length * 4 + outro;
  });
}
