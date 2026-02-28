let books = [];

fetch('books.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
    books = rows.map(row => {
      const cols = row.split(',');
      return {
        title: cols[0],
        author: cols[1],
        callNumber: cols[3]
      };
    });
  });

function searchBooks() {
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