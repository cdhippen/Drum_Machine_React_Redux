export const drumHit = (url, id) => {
  const sound = new Audio(url);
  sound.play();

  return {
    type: "HIT",
    id
  };
};
