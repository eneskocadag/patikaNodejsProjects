function showPost() {
  blogPost.forEach((element) => {
    console.log(element.name);
  });
}
const blogPost = [
  { name: "bişeyler1" },
  { name: "bişeyler2" },
  { name: "bişeyler3" },
];

function newPost(yeni) {
  blogPost.push(yeni);
  showPost();
}
newPost({ name: "buda yeni" });
