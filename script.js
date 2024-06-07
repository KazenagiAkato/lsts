const searchInput = document.getElementById("search");
const pages = {
  "trang chu": "Index.html",
  "trangchu": "Index.html",
  "trang chủ": "Index.html",
  "lienhe": "contact.html",
  "lien he": "contact.html",
  "liên hệ": "contact.html",
  "hoithao": "seminar.html",
  "hoi thao": "seminar.html",
  "hội thảo": "seminar.html",
  "sport": "sport.html",
  "video": "video.html",
  "videos": "video.html",
  "picture": "picture.html",
  "tamnhin": "vision.html",
  "tam nhin": "vision.html",
  "tầm nhìn": "vision.html",
  "trải nghiệm": "tnhn.html",
  "trai nghiem": "tnhn.html",
  "muc dich thanh lap": "mdtl.html",
  "mục đích thành lập": "mdtl.html",
  "hieu ca": "hieuca.html",
  "hiệu ca": "hieuca.html",
};

searchInput.addEventListener("click", () => {
  const input = document.getElementById("search-input").value.toLowerCase();

  if (pages.hasOwnProperty(input)) {
    window.location.href = pages[input];
  } else {
    alert("Không tìm thấy trang này.");
  }
})
