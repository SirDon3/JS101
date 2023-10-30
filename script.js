/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */




/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

/**
 * Function to generate random hex color
 */
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // Remove outline when cell is exited
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  // Set/remove random background color on click
  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
    }
  });
});

/**
 * Set page background using the "d" key on the keyboard
 */
const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});



















/** 

const frogpack = {
    name: "Frog Backpack",
    volume: 8,
    color: "green",
    pocketNum: 3,
    strapLength: {
      left: 10,
      right: 10,
    },
    lidOpen: false,
    image: "../assets/images/frog.svg",
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  
  // Baseline HTML output
  const content = `
      <h1 class="backpack__name">${frogpack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          frogpack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          frogpack.color
        }</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          frogpack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          frogpack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          frogpack.strapLength.right
        } inches</span></li>
        <li class="feature backpack__lid">Lid status:<span> ${
          frogpack.lidOpen ? "open" : "closed"
        }</span></li>
      </ul>  
  `;

const imageFigure = (imageURL, caption) => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = imageURL;
    let figureCaption = document.createElement("figurecaption");
    figureCaption.innerHTML = caption
    figure.append(img, figureCaption);
    return figure

}

  
const newElement = (output, imageURL, caption) => {
    const article = document.createElement("article");
    article.innerHTML = output;
    article.append(imageFigure(imageURL, caption))
    return article
}

const main = document.querySelector("main");
main.append(newElement(content, frogpack.image, "This is my frog pack"));

console.log(newElement(content, frogpack.image, "This is my frog pack"))
/** */