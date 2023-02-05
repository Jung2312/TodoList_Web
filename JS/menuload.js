export default function memuRoad(Classname, memuname1, memuname2) {
  const memu1 = document.querySelector(`#${memuname1}`);
  const memu2 = document.querySelector(`#${memuname2}`);
  memu1.classList.add(Classname);
  memu2.classList.add(Classname);
}
