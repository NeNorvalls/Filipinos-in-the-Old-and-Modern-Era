const mqInnerContainer = document.querySelector(".mq-inner");
const mqUrl = "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&per_page=6";

document.addEventListener("DOMContentLoaded", () => {
  async function fetchBlogs(mqUrl) {
    try {
      const response = await fetch(mqUrl);
      const blogs = await response.json();
      console.log(blogs);
      createBlogs(blogs);
    } catch (error) {
      console.log(error);
    }
  }

  fetchBlogs(mqUrl);

  function createBlogs(blogpost) {
    blogpost.forEach(function (blog) {
      mqInnerContainer.innerHTML += `<a id="carousel-link" href="details.html?id=${blog.id}"
                                    <div class="card">
                                        <img src="${blog.acf.images}">
                                        <div class="content">
                                            <h4 class="carousel-h4">${blog.title.rendered}</h4>
                                        </div>
                                    </div>
                                  </a>`;
    });
  }
});


