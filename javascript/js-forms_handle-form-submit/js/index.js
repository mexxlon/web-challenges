console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData.entries());

  data.age = Number(data.age);
  data.badness = Number(data.badness);

  console.log("Form Data:", data);

  const ageBadnessSum = data.age + data.badness;
  console.log(
    `The age-badness-sum of '${data.firstName}' is '${ageBadnessSum}'`
  );

  form.reset();

  form.elements["firstName"].focus();
});
