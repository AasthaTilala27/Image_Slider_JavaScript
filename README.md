<div align="center">

# 🖼️ Image Slider Programee

### ✨ Interactive Image Slider using HTML, CSS & JavaScript

A beautiful and responsive image slider with **Previous / Next Navigation**, **Rounded Design**, and **Infinite Scrolling Functionality**.

<br>

![HTML](https://img.shields.io/badge/HTML5-Structure-orange?style=for-the-badge&logo=html5)

![CSS](https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3)

![JavaScript](https://img.shields.io/badge/JavaScript-Functionality-yellow?style=for-the-badge&logo=javascript)

</div>

---

# 📌 About The Project

This project demonstrates how to build an **Image Slider from scratch** using only **HTML, CSS, and JavaScript**.

Images are generated dynamically using JavaScript arrays and users can navigate through them using navigation buttons.

The slider supports **infinite scrolling**, which means:

✅ Last Image → First Image

✅ First Image → Last Image

✅ Smooth Navigation

✅ Modern Rounded UI

---

# ✨ Features

| Feature | Available |
|---------|-----------|
| Dynamic Image Loading | ✅ |
| Previous Navigation | ✅ |
| Next Navigation | ✅ |
| Infinite Slider | ✅ |
| Rounded Corners | ✅ |
| Box Shadow Effects | ✅ |
| Font Awesome Icons | ✅ |
| Responsive Design | ✅ |
| Beginner Friendly | ✅ |

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Slider Logic |
| Font Awesome | Icons |

---

# 📂 Project Structure

```text
Image-Slider/

├── index.html
├── final.css
├── final.js

└── images/
    ├── img1.jpg
    ├── img2.jpg
    ├── img3.jpg
    ├── img4.jpg
    └── img5.jpg
```

---

# 🏗️ HTML Structure

The HTML file consists of:

✔ Title

✔ Slider Container

✔ Previous Button

✔ Image Container

✔ Next Button

```html
<div class="slider">

<button class="prev" onclick="prevSlide()">

<i class="fa-solid fa-chevron-right"></i>

</button>

<div class="images"></div>

<button class="next" onclick="nextSlide()">

<i class="fa-solid fa-chevron-left"></i>

</button>

</div>
```

---

# 🎨 CSS Styling

The CSS file is responsible for designing the slider.

### Slider Container

```css
.slider{

width:850px;

height:500px;

position:relative;

overflow:hidden;

border-radius:35px;

box-shadow:
0 10px 30px rgba(0,0,0,.2);

}
```

### Image Styling

```css
.slide{

width:100%;

height:100%;

object-fit:cover;

display:none;

}
```

### Active Slide

```css
.slide.active{

display:block;

}
```

### Navigation Buttons

```css
button{

position:absolute;

top:50%;

transform:translateY(-50%);

width:60px;

height:60px;

border:none;

border-radius:50%;

background:white;

cursor:pointer;

}
```

---

# ⚙️ JavaScript Workflow

### 1️⃣ Store Image Paths

```javascript
let images=[

"images/img1.jpg",

"images/img2.jpg",

"images/img3.jpg",

"images/img4.jpg",

"images/img5.jpg"

];
```

---

### 2️⃣ Select Image Container

```javascript
let container =

document.querySelector(".images");
```

---

### 3️⃣ Create Slides Dynamically

```javascript
for(let i=0;i<images.length;i++){

container.innerHTML +=

`<img src="${images[i]}"

class="slide">`;

}
```

---

### 4️⃣ Select All Slides

```javascript
let slides =

document.querySelectorAll(".slide");
```

---

### 5️⃣ Track Current Slide

```javascript
let current = 0;
```

---

### 6️⃣ Show Current Slide

```javascript
function showSlide(){

for(let i=0;i<slides.length;i++){

slides[i]

.classList.remove("active");

}

slides[current]

.classList.add("active");

}
```

---

### 7️⃣ Next Slide Logic

```javascript
function nextSlide(){

current++;

if(current==slides.length){

current=0;

}

showSlide();

}
```

---

### 8️⃣ Previous Slide Logic

```javascript
function prevSlide(){

current--;

if(current<0){

current=

slides.length-1;

}

showSlide();

}
```

---

# 🔄 Slider Flow

```text
Start

↓

Load Images

↓

Generate Slides

↓

Show First Image

↓

User Clicks Button

↓

Update Current Index

↓

Remove Active Class

↓

Add Active Class

↓

Display New Image
```

---

# 📚 Concepts Used

### HTML

✔ Div Elements

✔ Buttons

✔ Font Awesome Icons

---

### CSS

✔ Flexbox

✔ Border Radius

✔ Box Shadow

✔ Positioning

✔ Hover Effects

✔ Overflow Hidden

✔ Object Fit

---

### JavaScript

✔ Arrays

✔ Loops

✔ Functions

✔ DOM Manipulation

✔ querySelector()

✔ querySelectorAll()

✔ innerHTML

✔ classList.add()

✔ classList.remove()

✔ Event Handling

✔ Conditional Statements

✔ Infinite Navigation

---

# 🚀 Future Enhancements

🔹 Auto Slide

🔹 Navigation Dots

🔹 Fade Animation

🔹 Swipe Support

🔹 Keyboard Controls

🔹 Full Screen Mode

🔹 Image Counter

---

# 🎥 Project Demonstration

<div align="center">

## 📹 Watch the Complete Demo

Click below to view the project demonstration.

[▶️ Watch Demo Video]  https://drive.google.com/file/d/1fRMZqqTgN0zaCACUM1et7UrymbjG5auo/view?usp=sharing
</div>

---

<div align="center">


# 👩‍💻 Author

### Aastha Tilala

# 🚀 Let's Connect

🔗 GitHub: https://github.com/AasthaTilala27

Thank you for checking out this project.

I hope you found it useful and inspiring.

⭐ Feel free to fork, contribute, or leave a star.


### Crafted with ❤️ using HTML, CSS & JavaScript

#### Learning • Building • Growing 🚀

### Happy Coding 🚀
</div>
