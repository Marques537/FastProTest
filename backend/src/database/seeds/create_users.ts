import { Knex } from 'knex';

export async function seed(knex: Knex){
  await knex('user').insert({
    name: 'admin',
    phoneNumber: '5519983266439',
    email: 'matheusm537@gmail.com',
    password: 'admin'
  });
}
