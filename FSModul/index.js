const fs = require("fs");
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("JSON dosyası oluşturuldu");
  }
);
fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("DOSYA başarıyla okundu");
  console.log(data);
});
fs.appendFile(
  "employees.json",
  '\n{"name": "Employee 2 Name", "salary": 300}',
  (err, data) => {
    if (err) console.log(err);
    console.log("DOSYA güncellendi");
  }
);
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("DOSYA SİLİNDİ");
});
