'use strict';

// Hikâye motoru: Türkçe ek yardımcısı, sayılar, sıra sayıları.
const test = require('node:test');
const assert = require('node:assert/strict');
const { ek, sayi, sira, liste, possEk } = require('../lib/story/turkish');

const K = ['gen', 'acc', 'dat', 'loc', 'abl', 'ile', 'cop', 'da'];

// ad -> [gen, acc, dat, loc, abl, ile, cop, da]
const TABLE = {
  Ahmet: ["Ahmet'in", "Ahmet'i", "Ahmet'e", "Ahmet'te", "Ahmet'ten", "Ahmet'le", "Ahmet'ti", 'Ahmet de'],
  Ali: ["Ali'nin", "Ali'yi", "Ali'ye", "Ali'de", "Ali'den", "Ali'yle", "Ali'ydi", 'Ali de'],
  Ayşe: ["Ayşe'nin", "Ayşe'yi", "Ayşe'ye", "Ayşe'de", "Ayşe'den", "Ayşe'yle", "Ayşe'ydi", 'Ayşe de'],
  Burak: ["Burak'ın", "Burak'ı", "Burak'a", "Burak'ta", "Burak'tan", "Burak'la", "Burak'tı", 'Burak da'],
  Oğuz: ["Oğuz'un", "Oğuz'u", "Oğuz'a", "Oğuz'da", "Oğuz'dan", "Oğuz'la", "Oğuz'du", 'Oğuz da'],
  Gül: ["Gül'ün", "Gül'ü", "Gül'e", "Gül'de", "Gül'den", "Gül'le", "Gül'dü", 'Gül de'],
  Ömer: ["Ömer'in", "Ömer'i", "Ömer'e", "Ömer'de", "Ömer'den", "Ömer'le", "Ömer'di", 'Ömer de'],
  Ufuk: ["Ufuk'un", "Ufuk'u", "Ufuk'a", "Ufuk'ta", "Ufuk'tan", "Ufuk'la", "Ufuk'tu", 'Ufuk da'],
  Tarık: ["Tarık'ın", "Tarık'ı", "Tarık'a", "Tarık'ta", "Tarık'tan", "Tarık'la", "Tarık'tı", 'Tarık da'],
  Kemal: ["Kemal'in", "Kemal'i", "Kemal'e", "Kemal'de", "Kemal'den", "Kemal'le", "Kemal'di", 'Kemal de'],
  Meral: ["Meral'in", "Meral'i", "Meral'e", "Meral'de", "Meral'den", "Meral'le", "Meral'di", 'Meral de'],
  'Şule Nur': ["Şule Nur'un", "Şule Nur'u", "Şule Nur'a", "Şule Nur'da", "Şule Nur'dan", "Şule Nur'la", "Şule Nur'du", 'Şule Nur da'],
  İrem: ["İrem'in", "İrem'i", "İrem'e", "İrem'de", "İrem'den", "İrem'le", "İrem'di", 'İrem de'],
  IRMAK: ["IRMAK'ın", "IRMAK'ı", "IRMAK'a", "IRMAK'ta", "IRMAK'tan", "IRMAK'la", "IRMAK'tı", 'IRMAK da'],
  Ilgın: ["Ilgın'ın", "Ilgın'ı", "Ilgın'a", "Ilgın'da", "Ilgın'dan", "Ilgın'la", "Ilgın'dı", 'Ilgın da'],
  // rakamla bitenler okunuşa göre: dokuz, kırk, iki, yedi, bin, üç
  Ali99: ["Ali99'un", "Ali99'u", "Ali99'a", "Ali99'da", "Ali99'dan", "Ali99'la", "Ali99'du", 'Ali99 da'],
  Can40: ["Can40'ın", "Can40'ı", "Can40'a", "Can40'ta", "Can40'tan", "Can40'la", "Can40'tı", 'Can40 da'],
  R2D2: ["R2D2'nin", "R2D2'yi", "R2D2'ye", "R2D2'de", "R2D2'den", "R2D2'yle", "R2D2'ydi", 'R2D2 de'],
  '007': ["007'nin", "007'yi", "007'ye", "007'de", "007'den", "007'yle", "007'ydi", '007 de'],
  x1000: ["x1000'in", "x1000'i", "x1000'e", "x1000'de", "x1000'den", "x1000'le", "x1000'di", 'x1000 de'],
  Murat3: ["Murat3'ün", "Murat3'ü", "Murat3'e", "Murat3'te", "Murat3'ten", "Murat3'le", "Murat3'tü", 'Murat3 de'],
  // kısaltma: harf okunuşu (ke, de)
  MRK: ["MRK'nin", "MRK'yi", "MRK'ye", "MRK'de", "MRK'den", "MRK'yle", "MRK'ydi", 'MRK de'],
  // sondaki işaretler okunmaz
  Deniz_: ["Deniz_'in", "Deniz_'i", "Deniz_'e", "Deniz_'de", "Deniz_'den", "Deniz_'le", "Deniz_'di", 'Deniz_ de'],
  'ece.': ["ece.'nin", "ece.'yi", "ece.'ye", "ece.'de", "ece.'den", "ece.'yle", "ece.'ydi", 'ece. de'],
};

// Uyumun belirlenemediği adlar "adlı komşu" kalıbına düşer.
const FALLBACK = ['Xyz', 'Brr', 'Max', 'José', 'ALI', 'MELI', 'Андрей', 'Wolf', '___', '', 'Ψψψ', 'abc٣'];

test('ek: zor adlar tablosu', () => {
  for (const [name, row] of Object.entries(TABLE)) {
    K.forEach((k, i) => assert.equal(ek(name, k), row[i], `${name} / ${k}`));
  }
});

test('ek: belirlenemeyen adlarda güvenli kalıp', () => {
  for (const name of FALLBACK) {
    assert.equal(ek(name, 'gen'), `${name} adlı komşunun`);
    assert.equal(ek(name, 'acc'), `${name} adlı komşuyu`);
    assert.equal(ek(name, 'dat'), `${name} adlı komşuya`);
    assert.equal(ek(name, 'loc'), `${name} adlı komşuda`);
    assert.equal(ek(name, 'abl'), `${name} adlı komşudan`);
    assert.equal(ek(name, 'ile'), `${name} adlı komşuyla`);
    assert.equal(ek(name, 'cop'), `${name} adlı komşuydu`);
    assert.equal(ek(name, 'da'), `${name} adlı komşu da`);
  }
});

test('ek: tuhaf girdilerde hata yok, ek yoksa ad aynen', () => {
  for (const v of [null, undefined, 42, {}, [], 'a b c', ' Ali ']) {
    for (const k of [...K, null, 'yok']) assert.equal(typeof ek(v, k), 'string');
  }
  assert.equal(ek('Ali', null), 'Ali');
});

test('sayılar, sıra sayıları, liste, iyelikli ek', () => {
  assert.equal(sayi(0), 'sıfır');
  assert.equal(sayi(7), 'yedi');
  assert.equal(sayi(17), 'on yedi');
  assert.equal(sayi(20), 'yirmi');
  assert.equal(sayi(101), 'yüz bir');
  const ord = { 1: 'birinci', 2: 'ikinci', 3: 'üçüncü', 4: 'dördüncü', 5: 'beşinci', 6: 'altıncı', 7: 'yedinci', 8: 'sekizinci', 9: 'dokuzuncu', 10: 'onuncu', 11: 'on birinci', 14: 'on dördüncü', 20: 'yirminci', 30: 'otuzuncu', 40: 'kırkıncı', 100: 'yüzüncü' };
  for (const [n, w] of Object.entries(ord)) assert.equal(sira(Number(n)), w);
  assert.equal(liste(['A']), 'A');
  assert.equal(liste(['Ali', 'Burak'], 'gen'), "Ali ile Burak'ın");
  assert.equal(liste(['A', 'B', 'Ece'], 'dat'), "A, B ve Ece'ye");
  assert.equal(possEk('terzisi', 'acc'), 'terzisini');
  assert.equal(possEk('fırını', 'loc'), 'fırınında');
  assert.equal(possEk('nalbandı', 'gen'), 'nalbandının');
  assert.equal(possEk('dükkânı', 'abl'), 'dükkânından');
  assert.equal(possEk('örsü', 'dat'), 'örsüne');
});

test('meslek adlarına ek: sert ünsüz yumuşar (kasabın, nalbandı, ulağa), "adlı" kalıbı', () => {
  const { render } = require('../lib/story/engine');
  const { JOBS } = require('../lib/story/jobs');
  const job = (id) => JOBS.find((j) => j.id === id);
  const r = (tpl, name, id) => render(tpl, { persons: { a: { name, job: job(id) } } });
  assert.equal(r('{aj|gen}', 'Xyz', 'kasap'), 'Xyz adlı kasabın');
  assert.equal(r('{aj|acc}', 'Xyz', 'nalbant'), 'Xyz adlı nalbandı');
  assert.equal(r('{aj|dat}', 'Xyz', 'ulak'), 'Xyz adlı ulağa');
  assert.equal(r('{aj|loc}', 'Xyz', 'kasap'), 'Xyz adlı kasapta');
  assert.equal(r('Dün {aj|gen}', 'Ali', 'kasap'), "Dün kasap Ali'nin");
  assert.equal(r('{aj}. {ajob|dat} selam', 'Ali', 'ulak'), 'Ulak Ali. Ulağa selam');
  assert.equal(r('Selam. {aj} geldi.', 'Ali', 'terzi'), 'Selam. Terzi Ali geldi.');
  for (const j of JOBS) if (/[pçtk]$/.test(j.noun)) assert.ok(j.soft, `${j.id} yumuşama gövdesi yok`);
});
