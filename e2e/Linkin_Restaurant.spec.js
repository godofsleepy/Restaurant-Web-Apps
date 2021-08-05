/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.link-item');
  const firstCard = locate('.post-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#btn');
  I.click('#btn');

  I.amOnPage('/#/booked');
  I.seeElement('.link-item');
  const likedCardTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  // melihat section restaurant pertama dan menuju ke halaman detail restaurant
  I.seeElement('.link-item');
  const firstCard = locate('.post-item__title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // melakukan klik pada button like
  I.seeElement('#btn');
  I.click('#btn');

  // kembali ke halaman booked
  I.amOnPage('/#/booked');
  I.seeElement('.link-item');
  const likedCard = locate('.post-item__title').first();
  const likedCardTitle = await I.grabTextFrom(likedCard);
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // mengklik section restaurant yang terdapat pada halaman booked
  I.click(likedCardTitle);

  // melakukan unlike terhadap restaurant yang terdapat pada halaman booked
  I.seeElement('#btn');
  I.click('#btn');

  // kembali ke halaman booked
  I.amOnPage('/#/booked');
  I.dontSee('.link-item');
});
