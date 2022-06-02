const url =
  "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?categories=18&categories_exclude=19,25,17&acf_format=standard&orderby=date&_embed";
const page =
  "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?categories=18&categories_exclude=19,25,17&acf_format=standard&_embed&page=2";
const blogContainer = document.querySelector(".blog-container");
const loader = document.querySelector(".loader");
const viewMoreBtn = document.querySelector("#view-btn");

async function fetchBlogs(url) {
  try {
    const response = await fetch(url);
    const blogs = await response.json();
    console.log(blogs);
    createBlogs(blogs);
    // no need to display the view more button
    if (blogs.length < 10) {
      viewMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    blogContainer.classList.remove("loader");
    blogContainer.innerHTML = errorMessage("Failed to display blogs", "error");
    viewMoreBtn.style.display = "none";
  }
}

fetchBlogs(url);

function createBlogs(blogpost) {
  loader.classList.remove("loader");

  blogpost.forEach(function (blog) {
    blogContainer.innerHTML += `
        
    <div class="column">
    <a href="details.html?id=${blog.id}" class="details-link bg-img" style="background-image: url(${blog.acf.images})"></a>
      
        <div class="title-container">
        <a href="details.html?id=${blog.id}" class="details-link"><h2 class="blog-title">${blog.title.rendered}</h2></a>
            <p class="blog-category">Category: ${blog._embedded["wp:term"][0][0].name}</p>
            <a href="details.html?id=${blog.id}" id="readmore-btn">Read more</a>
        </div>

    </div>
        
        `;
  });
}
viewMoreBtn.onclick = function () {
  fetchBlogs(page);
  viewMoreBtn.style.display = "none";
};