import React from 'react';

export default function PeopleCard({ name, height, birth_year }) {
  return (
    <div class="card">
      <div class="container">
        <h2>
          <b>{name}</b>
        </h2>
        <p>Height: {height}</p>
        <p>Birthday: {birth_year}</p>
      </div>
    </div>
  );
}
