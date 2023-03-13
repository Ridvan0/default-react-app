const users = [];

// Kayıt olma API'si
app.post('/api/register', (req, res) => {
  const { email, password, name } = req.body;

  // E-posta adresinin benzersiz olduğundan emin ol
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'Bu e-posta adresi zaten kayıtlı.' });
  }

  // Yeni kullanıcı nesnesi oluştur ve diziye ekle
  const newUser = { id: uuidv4(), email, password, name };
  users.push(newUser);
  return res.status(201).json({ message: 'Kullanıcı başarıyla kaydedildi.', user: newUser });
});