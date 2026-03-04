let books = [];

fetch('books.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').slice(1);
    books = rows.map(row => {
      const cols = row.split(',');
      return {
        barcode: cols[0],
        title: cols[1],
        author: cols[2],
        category: cols[3],
        callNumber: cols[4]
      };
    });
  });
