const ADMIN_CREDENTIALS = {username: 'admin', password: 'Mb@$veri2025'};
function getUsers(){ return JSON.parse(localStorage.getItem('apticore_users') || '[]'); }
function saveUsers(users){ localStorage.setItem('apticore_users', JSON.stringify(users)); }
function signup(event){
  event.preventDefault();
  const name = document.getElementById('su_name').value.trim();
  const email = document.getElementById('su_email').value.trim();
  const username = document.getElementById('su_username').value.trim();
  const password = document.getElementById('su_password').value;
  if(!username || !password){ alert('Please fill required fields'); return; }
  const users = getUsers();
  if(users.find(u=>u.username===username)){ alert('Username already taken'); return; }
  users.push({name, email, username, password, joined: new Date().toISOString()});
  saveUsers(users);
  alert('Signup successful. You can now login.');
  window.location.href = 'index.html';
}
function login(event){
  event.preventDefault();
  const username = document.getElementById('li_username').value.trim();
  const password = document.getElementById('li_password').value;
  if(username===ADMIN_CREDENTIALS.username && password===ADMIN_CREDENTIALS.password){
    sessionStorage.setItem('apticore_current', JSON.stringify({username:'admin', name:'Administrator', isAdmin:true}));
    window.location.href = 'admin.html';
    return;
  }
  const users = getUsers();
  const user = users.find(u=>u.username===username && u.password===password);
  if(!user){ alert('Invalid credentials'); return; }
  sessionStorage.setItem('apticore_current', JSON.stringify({username:user.username, name:user.name || user.username, isAdmin:false}));
  window.location.href = 'dashboard.html';
}
function logout(){ sessionStorage.removeItem('apticore_current'); window.location.href = 'index.html'; }
function populateUserUI(){ const cur = JSON.parse(sessionStorage.getItem('apticore_current') || 'null'); if(!cur) return; const el = document.getElementById('user_greet'); if(el) el.textContent = cur.name || cur.username; }