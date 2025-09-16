
const HarTsagaanTovch = document.getElementById('toggle-dark-mode');
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  console.log('Dark-mode is true');
} else {
  console.log('Dark-mode is false');
}

HarTsagaanTovch.addEventListener('click', () => {
  const assanEseh = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', assanEseh);

  if (assanEseh) {
    console.log('Dark-mode enabled');
  } else {
    console.log('Dark-mode disabled');
     }
});
const PASSWORD = "1234";
const loginBTN = document.getElementById('login-button');
const loginsection = document.getElementById('login-section');
const adminPanel = document.getElementById('admin-panel');
const loginerror = document.getElementById('login-error');
loginBTN.addEventListener('click', () => {
  const password = document.getElementById('admin-password').value;
  if (password === PASSWORD) {
    loginsection.style.display = 'none';
    adminPanel.style.display = 'block';
    console.log('Login successful');
  } else {
    loginerror.textContent= 'Password is incorrect';
    console.log('Login failed');
  }
});
const enableeditBTN = document.getElementById('enable-edit-mode');
const savechangesBTN = document.getElementById('save-all');

enableeditBTN.addEventListener('click', () => {
  const about = document.getElementById('about-text');
  about.setAttribute('contenteditable', 'true');

  const project1 = document.getElementById('project-1');
  project1.setAttribute('contenteditable', 'true');

  const project2 = document.getElementById('project-2');
  project2.setAttribute('contenteditable', 'true');

  const project3 = document.getElementById('project-3');
  project3.setAttribute('contenteditable', 'true');

  savechangesBTN.style.display = 'inline-block';
  alert('Edit mode enabled. Make your changes and click "Save All Changes" when done.');
  savechangesBTN.addEventListener('click', () => {
    const aboutText =  document.getElementById('about-text').textContent.trim ();
    localStorage.setItem('about-text', aboutText); 

    const project1Text =  document.getElementById('project-1').textContent.trim ();
    localStorage.setItem('project-1', project1Text);    
    const project2Text =  document.getElementById('project-2').textContent.trim ();
    localStorage.setItem('project-2', project2Text);    
    const project3Text =  document.getElementById('project-3').textContent.trim ();
    localStorage.setItem('project-3', project3Text);
    alert('Changes saved successfully!');
  });
});
// Load saved content on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedAboutText = localStorage.getItem('about-text');
  if (savedAboutText) {
    document.getElementById('about-text').textContent = savedAboutText;
  }
  

  const savedProject1Text = localStorage.getItem('project-1');
  if (savedProject1Text) {
    document.getElementById('project-1').textContent = savedProject1Text;
  }

  const savedProject2Text = localStorage.getItem('project-2');
  if (savedProject2Text) {
    document.getElementById('project-2').textContent = savedProject2Text;
  }

  const savedProject3Text = localStorage.getItem('project-3');
  if (savedProject3Text) {
    document.getElementById('project-3').textContent = savedProject3Text;
  }
});