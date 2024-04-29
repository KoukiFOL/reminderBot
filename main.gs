function main() {
  const sheets = SpreadsheetApp.getActiveSpreadsheet();
  const titles = sheets.getRange("B:B").getValues();
  const deadLines = sheets.getRange("C:C").getValues();
  const asignees = sheets.getRange("D:D").getValues();
  const notes = sheets.getRange("E:E").getValues();
  const achievement = sheets.getRange("F:F").getValues();
  let noticeLine = new Date();
  noticeLine.setDate(noticeLine.getDate() + 3);

  for (let i=0; i < deadLines.length; i++) {
    let deadLine = new Date(deadLines[i]);
    if (deadLine.getDate() == noticeLine.getDate() && deadLine.getMonth() == noticeLine.getMonth()) {
      let title = titles[i];
      let asignee = asignees[i];
      let note = notes[i];
      console.log(`締め切り3日前の予定が見つかりました。
  title: ${title}
  asignee: ${asignee}
  note: ${note}`)
      sendMessage(title, deadLine, asignee, note);
    }

  }
  return;
}
