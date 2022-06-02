// variables
const url = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed";
const page2 = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/?acf_format=standard&orderby=date&_embed&page=2";
const page3 = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/?acf_format=standard&orderby=date&_embed&page=3";
const blogContainer = document.querySelector(".blog-container");
const loader = document.querySelector(".loader");
const viewBtn1Container = document.querySelector("#view-btn-1-container");
const viewBtn2Container = document.querySelector("#view-btn-2-container");
const viewMoreBtn = document.querySelector("#view-btn");
const viewMoreBtn2 = document.querySelector("#view-btn-2");

// fetching the blogs
async function fetchBlogs(url) {
  try {
    const response = await fetch(url);
    const blogs = await response.json();
    console.log(blogs);
    createBlogs(blogs);
    // no need to display the view more button when there is less than 10 results
    if (blogs.length < 10) {
      viewMoreBtn.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    loaderWrapper.classList.remove("loader");
    blogContainer.innerHTML = errorMessage("Failed to display blogs", "error");
    viewMoreBtn.style.display = "none";
    viewMoreBtn2.style.display = "none";
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
  fetchBlogs(page2);
  viewMoreBtn.style.display = "none";
  viewMoreBtn2.style.display = "block";
};

viewMoreBtn2.onclick = function () {
  fetchBlogs(page3);
  viewMoreBtn2.style.display = "none";
};
