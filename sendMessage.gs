function sendMessage(title, deadLine, asignee, note) {
  const DISCORD_WEBHOOK = PropertiesService.getScriptProperties().getProperty("DISCORD_WEBHOOK");
  let userIds = {
    'よっちゃん': '589780784513024012',
    '朝倉': '463691481706659840',
    '牧野': '693097456983998535',
    '寺内': '889495998118920202',
    'ガイア': '944557906496479292',
    'よっしー': '950719593603813428',
    '新開':  '584068821917237295'
    };
    
  console.log(`${userIds[asignee]}\n
    # 期限が近づいております！\n##タイトル\n${title}\n## 締め切り${deadLine}\n##担当者\n${asignee}\n## メモ\n${note}`)
  content = {
    username: "reminderBot",
    content:`<@${userIds[asignee]}>
# 期限が近づいております！\n
## タイトル
${title}
## 締め切り
${deadLine.getMonth()+1}月${deadLine.getDate()}日
## 担当者
${asignee}
## メモ
${note} `
}
  UrlFetchApp.fetch(DISCORD_WEBHOOK, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(content)
  })
}