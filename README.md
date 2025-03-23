# 🚀 React Page Routing with Framer Motion

### **🎨 A Practice Project for Smooth Page Transitions**
This project is a **practice exercise** to explore **React page routing** with **Framer Motion**. It implements animated transitions when navigating between pages, providing a smooth and engaging user experience.

---
## **📌 Features**
✅ Animated page transitions using Framer Motion  
✅ React Router for seamless navigation  
✅ Responsive and customizable  
✅ Beginner-friendly setup for learning purposes  

---
## **📦 Installation**

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/react-page-transition-practice.git
   cd react-page-transition-practice
   ```
2. **Install dependencies:**
   ```sh
   npm install react-router-dom
   npm install framer-motion
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. Open `http://localhost:3000/` in your browser.

---
## **🎬 How It Works**
1. **Wrap each route with `<Transition>`** to apply animations.
2. **Framer Motion handles entry/exit animations** with `AnimatePresence`.
3. **Page transitions create a step-like reveal effect.**

---
## **🖥️ Usage**
### **Modify Animation Duration & Easing**
Edit `Transition.js` to customize transitions:
```js
const transitionVariants = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { y: "-100%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};
```

### **Customize Colors in CSS**
```css
.transition-layer {
    background-color: black; /* Change this to any color */
}
```

---
## **🔗 Resources**
- [Framer Motion Docs](https://www.framer.com/motion/)  
- [React Router Docs](https://reactrouter.com/)  

---
## **👨‍💻 Author**
**olatubosun**  
📌 GitHub: [your-username](https://github.com/ola3bosun) 
📌 Twitter: [your-handle](https://twitter.com/ola2bosun__)


