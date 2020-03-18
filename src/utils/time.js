export const formatTime = (timeCreated) => {
  return `${timeCreated.slice(0, timeCreated.indexOf(',') + 1)} ${timeCreated.slice(timeCreated.indexOf(',') + 6, timeCreated.length)}`
}