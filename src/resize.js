export default function Resize() {
  var m_pos;
  function resize(e) {
    var parent = resize_el.parentNode;
    var dx = m_pos - e.x;
    m_pos = e.x;
    parent.style.width =
      parseInt(getComputedStyle(parent, "").width) + dx + "px";
  }

  var resize_el = document.getElementById("resizeDiv");
  console.log(resize_el);
  resize_el.addEventListener(
    "mousedown",
    function (e) {
      m_pos = e.x;
      document.addEventListener("mousemove", resize, false);
    },
    false
  );
  document.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", resize, false);
    },
    false
  );
}
