

document.addEventListener('DOMContentLoaded', () => {
  const persona = {
    name: 'Mario Lo Coco',
    role: 'Full Stack Software Developer',
    email: 'lo-coco-mario-@hotmail.it',
    location: 'Cork, Ireland',
    description: 'I am a expertise software developer with experience in front-end and back-end technologies. I love creating innovative and functional solutions that improve the user experience.'
  };

  document.getElementById('hero-name').textContent = persona.name;

  // Impostazione dell'anno corrente nel footer
  //auto update year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Aggiornamento sezione About
  const aboutSection = document.querySelector('#about p.muted');
  if (aboutSection) aboutSection.textContent = persona.description;

  const emailLink = document.querySelector('#about a[href^="mailto"]');
  if (emailLink) emailLink.textContent = persona.email;

  const locationEl = document.querySelector('#about .card p:nth-child(3)');
  if (locationEl) locationEl.innerHTML = `<strong>Località:</strong> ${persona.location}`;

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }
    alert('Message sent! I will reply soon.');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
});
