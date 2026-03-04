let books = [];

window.onload = function () {
  fetch('./books.json')
    .then(response => response.json())
    .then(data => {
      books = data;
      console.log("데이터 로딩 완료:", books.length);
    })
    .catch(error => {
      console.error("JSON 로딩 실패:", error);
    });
};

function searchBooks() {
  if (books.length === 0) {
    alert("데이터를 불러오는 중입니다. 잠시 후 다시 시도하세요.");
    return;
  }

  const input = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("searchType").value;
  const resultBody = document.getElementById("resultBody");
  const resultCount = document.getElementById("resultCount");

  resultBody.innerHTML = "";

  const filtered = books.filter(book => {
    if (type === "title") return book.title.toLowerCase().includes(input);
    if (type === "author") return book.author.toLowerCase().includes(input);
    return (
      book.title.toLowerCase().includes(input) ||
      book.author.toLowerCase().includes(input)
    );
  });

  resultCount.textContent = `검색 결과: ${filtered.length}건`;

  filtered.forEach(book => {
    const row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.callNumber}</td>
    </tr>`;
    resultBody.innerHTML += row;
  });
}
