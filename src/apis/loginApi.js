import firebase from 'firebase/app';
import 'firebase/auth';

nodew 
const express = require('express');
const app = express();
const port = 3001;
const firebase = require('firebase');
const jwt = require('jsonwebtoken');

app.use(express.json());

const firebaseConfig = {
    apiKey: "AIzaSyDjc-UwwzyGhER6HBHa0sr3lGiFRnVvyR0",
    authDomain: "ridvansevindik-c6991.firebaseapp.com",
    projectId: "ridvansevindik-c6991",
    storageBucket: "ridvansevindik-c6991.appspot.com",
    messagingSenderId: "860475079864",
    appId: "1:860475079864:web:f739bcd6bb95255748484d",
    measurementId: "G-WNEY1ZLENV"
};

firebase.initializeApp(firebaseConfig);

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Firebase Authentication API'sini kullanarak giriş yap
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Kullanıcı başarıyla giriş yaptı, token oluştur
      const user = userCredential.user;
      const token = generateToken(user.uid);
      return res.status(200).json({ message: 'Giriş başarılı.', token });
    })
    .catch((error) => {
      // Giriş başarısız oldu, hata mesajını yanıtla
      const errorCode = error.code;
      const errorMessage = error.message;
      return res.status(401).json({ message: 'E-posta adresi veya şifre yanlış.' });
    });
});

// Token oluşturma fonksiyonu
function generateToken(userId) {
  const payload = { userId };
  return jwt.sign(payload, 'secret_key', { expiresIn: '1h' });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});