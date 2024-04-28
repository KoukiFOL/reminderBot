function main() {
  const DISCORD_WEBHOOK = PropertiesService.getScriptProperties().getProperty("DISCORD_WEBHOOK")
  console.log(DISCORD_WEBHOOK);
  return;  
}
