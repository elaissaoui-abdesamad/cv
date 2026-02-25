body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
}

.header {
  background: #0b1120;
  padding: 20px 0;
  position: sticky;
  top: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #94a3b8;
  margin-left: 20px;
  text-decoration: none;
}

nav a:hover {
  color: #3b82f6;
}

.hero {
  padding: 80px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
}

.subtitle {
  color: #94a3b8;
  margin: 20px 0;
}

.photo-card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.photo-card img {
  width: 100%;
  border-radius: 10px;
}

.section {
  padding: 80px 0;
}

.section.dark {
  background: #0b1120;
}

.card {
  background: #1e293b;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  background: #243047;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
}

.primary {
  background: #2563eb;
  color: white;
}

.secondary {
  border: 1px solid #2563eb;
  color: #2563eb;
}

.primary:hover {
  background: #1d4ed8;
}

.secondary:hover {
  background: #2563eb;
  color: white;
}

.center {
  text-align: center;
}

footer {
  background: #0b1120;
  text-align: center;
  padding: 20px;
  color: #64748b;
}

@media(max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
}
