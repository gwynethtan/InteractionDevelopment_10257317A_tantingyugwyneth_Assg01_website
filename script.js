// Create list of comments
const testimonials = [
        { content: "Easy to follow instructions and I had a fun time baking it", person: "- Miss Tan" },
        { content: "Im so glad this shop existed. I got to spend more time with my children through baking", person: "- Mr. Smith" },
        { content: "Not your usual bread.Love it!", person: "- Mrs Poh" }
    ];

// Initialize index and total number of slides
    let i = 0;
    let j = testimonials.length;
    let testimonialContainer = document.getElementById("bread_container");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    next.addEventListener("click", () => {
      i = (j + i + 1) % j;
      output_testimonial(); //update display
    });
    prev.addEventListener("click", () => {
      i = (j + i - 1) % j;
      output_testimonial(); //update display
    });

    //physically display the output on the website
    let output_testimonial = () => {
      testimonialContainer.innerHTML = `
        <p>${testimonials[i].content}</p>
        <p>${testimonials[i].person}</>
      `;
    };

    window.onload = displayTestimonial; // output previous and next testimony 