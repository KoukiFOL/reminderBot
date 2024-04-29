function test() {
  const DISCORD_WEBHOOK = PropertiesService.getScriptProperties().getProperty("DISCORD_WEBHOOK");
  let userIds = {
    よっちゃん: 589780784513024012,
    朝倉: 463691481706659840,
    牧野: 693097456983998535,
    寺内: 889495998118920202,
    ガイア: 944557906496479292,
    よっしー: 950719593603813428,
    新開:  584068821917237295
    };
  content = {
    username: "reminderBot",
    content: `<@${userIds["よっちゃん"]}>`
  }
  UrlFetchApp.fetch(DISCORD_WEBHOOK, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(content),
  });
}
