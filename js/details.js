const blogContainer = document.querySelector(".blog-content-container");
const loader = document.querySelector(".loader");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
// acf_format=standard&orderby=date&_embed
// const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&_embed/${id}`;
const contentURL = `https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts/${id}?acf_format=standard&_embed&`;
async function getBlog() {
  try {
    const response = await fetch(contentURL);
    const content = await response.json();
    console.log(content);
    newPageTitle(content);
    createHTML(content);
  } catch (error) {
    console.log(error);
    blogContainer.innerHTML = message("Failed to display blogs", "error");
  }
}

getBlog();

function newPageTitle(blog) {
  document.title = `${blog.title.rendered}`;
}

function createHTML(blog) {
  loader.classList.remove("loader");

  blogContainer.innerHTML = ` <h1>${blog.title.rendered}</h1>
                                <div class="back-btn-container"><a class="back-to-btn" href="blog.html">Back to blogs</a></div>
                                <div class="content-img-container">
                                    <img class="details-img" src="${blog.acf.images}"  onclick="openModal()" alt="${blog.title.rendered}">
                                </div>
                                <div class="content-info-container category-info">
                                  <p><span class="content-info"> Category: ${blog._embedded["wp:term"][0][0].name}</span></p>
                                </div>
                                <div class="content-text-container">
                                ${blog.content.rendered}
                                </div>
                                <div class="content-info-container info-below">
                                  <p><span class="content-info"><span id="author">Author: </span><span id="author-name">${blog._embedded.author[0].name}</span></span></p>
                                  <p><span class="content-info">Date: ${blog.modified_gmt.slice(0, -9)}</span></p>
                                </div>`;

  console.log(blog);
}

// data._embedded['wp:featuredmedia'][0].alt_text