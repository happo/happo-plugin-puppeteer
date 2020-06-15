export default () => {
  const el = document.createElement('div');
  el.innerHTML = navigator.userAgent;
  document.body.appendChild(el);
}
