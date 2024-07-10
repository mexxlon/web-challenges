console.clear();

const socialMediaPost = document.createElement("article");
socialMediaPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "This is a new useless social media post!";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@a-frustrated-user";

const newLikeButton = document.createElement("button");
newLikeButton.setAttribute("type", "button"); // setting attribute type to button
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("data-js", "like-button"); // setting custom attribute data-js to like-button
newLikeButton.textContent = "♥ Like";

socialMediaPost.appendChild(postContent);
socialMediaPost.appendChild(postFooter);

postFooter.appendChild(postUsername);
postFooter.appendChild(newLikeButton);

document.body.appendChild(socialMediaPost);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButtons = document.querySelectorAll('[data-js="like-button"]'); // changing the event listener to toggle css for each button!
likeButtons.forEach((button) => {
  button.addEventListener("click", handleLikeButtonClick);
});
