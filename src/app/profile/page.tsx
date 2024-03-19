// pages/profile.js

import React from 'react';

const ProfilePage = () => {
  // Ganti nilai dengan biodata Anda
  const biodata = {
    name: 'Wulan Maulidiah',
    alamat: 'Jl. Senggani 6A',
    pekerjaan: 'Pelajar',
    hobbies: ['Membaca', 'Menonton']
  };

  return (
    <div>
      <h1>Profil</h1>
      <p>Nama: {biodata.name}</p>
      <p>Lokasi: {biodata.alamat}</p>
      <p>Pekerjaan: {biodata.pekerjaan}</p>
      <p>Hobi:</p>
      <ul>
        {biodata.hobbies.map((hobi, index) => (
          <li key={index}>{hobi}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
