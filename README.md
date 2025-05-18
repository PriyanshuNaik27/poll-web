# 🗳️ React Poll Web App

**https://poll-web-theta.vercel.app/**

A minimal and modern React-based polling application where users can:

- ✅ Create a poll with a question and multiple options
- 📊 View poll results with interactive bar and pie charts
- 📥 Download the visualized charts as images (PNG)
- 🕘 View the **most recent poll**  created 

---

## 🚀 Features

- **Poll Creation**: Submit a question and options to instantly create a poll.
- **Visual Results**: Poll results are shown as both bar and pie charts.
- **Chart Downloads**: Save charts locally as PNG images.
- **Recent Poll Access**: You can view **your latest created poll**.
- **Clean UI**: A simple, intuitive, and mobile-responsive interface.

---

## 🧱 Tech Stack

- **Frontend**: React (with Vite or Create React App)
- **Charting**:  [Recharts](https://recharts.org/)
- **Downloads**: `html-to-image`  for exporting charts
- **State Storage**: `localStorage` to save only the most recent poll

---

## 🛠️ Installation

```bash
git clone https://github.com/PriyanshuNaik27/poll-web.git
cd poll-web
npm install
npm run dev  # or npm start
