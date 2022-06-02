const buttonContainer = document.querySelector(".map");
const innerContainer = document.querySelector(".inner");
const loader = document.querySelector(".loader");
const url =
  "https://nenorvalls.no/flower-power/nenorvalls-blog/wp-json/wp/v2/blogposts?acf_format=standard&orderby=date&_embed&per_page=9";

buttonContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonContainer.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      innerContainer.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      innerContainer.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      innerContainer.style.transform = "translateX(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  async function fetchBlogs(url) {
    try {
      const response = await fetch(url);
      const blogs = await response.json();
      console.log(blogs);
      createBlogs(blogs);
    } catch (error) {
      loader.classList.remove("loader");
      console.log(error);
    }
  }

  fetchBlogs(url);

  function createBlogs(blogpost) {
    loader.classList.remove("loader");
    blogpost.forEach(function (blog) {
      innerContainer.innerHTML += `<a id="carousel-link" href="details.html?id=${blog.id}">
                                    <div class="card">
                                        <img src="${blog.acf.images}" alt="${blog.title.rendered}">
                                        <div class="content">
                                            <h4 class="carousel-h4">${blog.title.rendered}</h4>
                                        </div>
                                    </div>
                                  </a>`;
    });
  }
});
