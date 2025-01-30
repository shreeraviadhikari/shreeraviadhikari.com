function githubLoader({ src }) {
  return `https://raw.githubusercontent.com/shreeraviadhikari/shreeraviadhikari.com/refs/heads/master/public/${src}`;
}

function localLoader({ src }) {
  return `http://localhost:8000${src}`;
}

export default githubLoader;
