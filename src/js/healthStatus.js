export default function showHealthStatus(objectOfPlayer) {
  if (!objectOfPlayer) return null;

  if (objectOfPlayer.health > 50 && objectOfPlayer.health <= 100) {
    return "healthy";
  } 
  if (objectOfPlayer.health <= 50 & objectOfPlayer.health >= 15) {
    return "wounded";
  }
  if (objectOfPlayer.health < 15 && objectOfPlayer.health > 0) {
    return "critical";
  }
}

