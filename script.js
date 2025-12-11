// script.js — small interactive behavior
document.addEventListener('DOMContentLoaded', function(){
  // If the user adds a LinkedIn url via localStorage, show it
  const stored = localStorage.getItem('linkedin_url');
  if(stored){
    const el = document.getElementById('linkedin-placeholder');
    const el2 = document.getElementById('linkedin-contact');
    if(el) el.innerHTML = `<a href="${stored}" target="_blank">${stored}</a>`;
    if(el2) el2.innerHTML = `<a href="${stored}" target="_blank">${stored}</a>`;
  }

  // small analytics-free interaction: copy email on click
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if(emailLink){
    emailLink.addEventListener('click', function(){ 
      // no-op (just leave as mailto), but we can store a visit metric locally
      let visits = parseInt(localStorage.getItem('contact_clicks') || '0', 10);
      localStorage.setItem('contact_clicks', String(visits + 1));
    });
  }
});
