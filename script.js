body {
  background-color: #0a0a0a;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  margin: 0;
  overflow-x: hidden;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5%;
  align-items: center;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.5rem; }
  .grid { grid-template-columns: 1fr; }
    }
