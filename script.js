let books = [];

fetch('books.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");
    books = rows.map(row => {
      const cols = row.split(',');
      return {
        barcode: cols[0]?.trim(),
        title: cols[1]?.trim(),
        author: cols[2]?.trim(),
        category: cols[3]?.trim(),
        callNumber: cols[4]?.trim()
      };
    });
  });
