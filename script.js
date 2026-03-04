let books = [];

fetch('books.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split(/\r?\n/).slice(1).filter(row => row.trim() !== "");

    books = rows.map(row => {
      const cols = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

      return {
        barcode: cols?.[0]?.replace(/"/g, "").trim(),
        title: cols?.[1]?.replace(/"/g, "").trim(),
        author: cols?.[2]?.replace(/"/g, "").trim(),
        category: cols?.[3]?.replace(/"/g, "").trim(),
        callNumber: cols?.[4]?.replace(/"/g, "").trim()
      };
    });
  });
