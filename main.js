/* ===================================================== 
                Canvas Animation One
   ===================================================== */
function Canvas_One() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 5 + 2;
      this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.velocityY += 0.1; // Gravity effect
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }

  function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      if (particles[i].y > canvas.height) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  canvas.addEventListener("mousemove", (e) => {
    createParticles(e.x, e.y);
  });

  animate();
}
Canvas_One();

/* ===================================================== 
                Canvas Animation Two
   ===================================================== */
function Canvas_Two() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 5 + 2;
      this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = 0.8; // Add transparency for a fading effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }

    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }

  function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      if (particles[i].radius <= 0.2) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  canvas.addEventListener("mousemove", (e) => {
    createParticles(e.x, e.y);
  });

  animate();
}
// Canvas_Two();

/* ===================================================== 
              Canvas Animation Three
   ===================================================== */
function Canvas_Three() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 2;
      this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }

  function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      if (particles[i].radius <= 0.2) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  canvas.addEventListener("mousemove", (e) => {
    createParticles(e.x, e.y);
  });

  animate();
}
// Canvas_Three();

/* ===================================================== 
              Canvas Animation Four
   ===================================================== */
function Canvas_Four() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const gravity = 0.1; // Gravity force

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = Math.random() * 5 + 2;
      this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = 0.8; // Add transparency for a fading effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }

    update() {
      this.velocityY += gravity; // Apply gravity
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }

  function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      if (particles[i].y > canvas.height) {
        particles.splice(i, 1);
        i--;
      }
    }
  }

  canvas.addEventListener("click", (e) => {
    createParticles(e.x, e.y);
  });

  animate();
}
// Canvas_Four();

