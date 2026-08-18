export type PracticeArea = {
  slug: string
  title: string
  summary: string
  description: string
  services: string[]
  cta: string
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'porodicno-pravo',
    title: 'Porodično pravo',
    summary: 'Pravna pomoć u porodičnim odnosima i zaštita prava članova porodice u svim fazama konflikta ili tranzicije.',
    description:
      'Porodični sporovi često imaju posledice koje prevazilaze samo pravno pitanje. Zbog toga je, pored poznavanja prava, potrebno pažljivo sagledati konkretnu porodičnu situaciju i pronaći rešenje koje na odgovarajući način štiti prava klijenta, ali i njegovu budućnost, sigurnost i odnose sa decom.',
    services: [
      'Razvod braka',
      'Sporazumni razvod',
      'Vršenje roditeljskog prava',
      'Izdržavanje',
      'Održavanje ličnih odnosa sa detetom',
      'Podela zajedničke imovine',
      'Zaštita od nasilja u porodici',
      'Sastavljanje sporazuma i drugih pravnih akata',
      'Zastupanje u porodičnim sporovima',
    ],
    cta: 'Razgovarajte sa advokatom o svom slučaju',
  },
  {
    slug: 'privredno-pravo',
    title: 'Privredno pravo',
    summary: 'Pravna podrška poslovanju, ugovori i zaštita interesa pravnih lica u svakodnevnom radu.',
    description:
      'Kvalitetna pravna podrška privrednom subjektu ne počinje tek kada nastane spor. Dobro uređeni poslovni odnosi, odgovarajući ugovori i pravovremeno prepoznavanje pravnih rizika mogu sprečiti značajne buduće probleme i troškove, dok pravilno postavljeni ugovori i rutina poslovanja stvaraju temelje za stabilan i siguran rast poslovanja.',
    services: [
      'Izrada i pregled ugovora',
      'Pregovaranje ugovornih odredaba',
      'Pravna podrška u poslovanju',
      'Usklađivanje poslovanja sa propisima',
      'Korporativna dokumentacija',
      'Osnivanje i statusne promene privrednih društava',
      'Radnopravna dokumentacija',
      'Naplata potraživanja',
      'Izvršni postupci',
      'Zastupanje u privrednim sporovima',
    ],
    cta: 'Pravna podrška za vaše poslovanje',
  },
  {
    slug: 'nasledno-pravo',
    title: 'Nasledno pravo',
    summary: 'Zaštita naslednih prava, ostavinski postupci i jasna pravna procedura u svakom naslednopravnom pitanju.',
    description:
      'Naslednopravna pitanja mogu nastati tokom ostavinskog postupka, ali i mnogo pre ili nakon njegovog okončanja. U takvim situacijama ključno je pravilno utvrditi ko su naslednici, koja je imovina u ostavštini i kako najbolje zaštititi prava svih zainteresovanih lica uz minimiziranje rizika od sporova i pogrešnih odluka.',
    services: [
      'Ostavinski postupci',
      'Zastupanje naslednika',
      'Nasledničke izjave',
      'Testament',
      'Nužni deo',
      'Ugovor o doživotnom izdržavanju',
      'Ugovor o ustupanju i raspodeli imovine za života',
      'Nasledni sporovi',
      'Utvrđivanje i zaštitu naslednih prava',
    ],
    cta: 'Zatražite pravnu procenu naslednog pitanja',
  },
  {
    slug: 'nekretnine',
    title: 'Nekretnine',
    summary: 'Pravna sigurnost u poslovima sa nepokretnostima, od provere dokumentacije do završetka transakcije.',
    description:
      'Kupovina, prodaja ili drugi pravni posao u vezi sa nepokretnosti često predstavlja jednu od finansijski najznačajnijih odluka za klijenta. Pre zaključenja ugovora potrebno je proveriti pravni status objekta, podatke iz katastra, terete i sve okolnosti koje mogu uticati na sigurnost kupovine, prodaje ili zakupa.',
    services: [
      'Kupoprodaja nepokretnosti',
      'Ugovori o zakupu',
      'Provera pravnog statusa nepokretnosti',
      'Analiza podataka iz katastra',
      'Uknjižba prava svojine',
      'Hipoteke i drugi tereti',
      'Susvojinski odnosi',
      'Deoba nepokretnosti',
      'Sporovi u vezi sa svojinom i državinom',
      'Održaj',
      'Druge imovinskopravne postupke',
    ],
    cta: 'Proverite pravnu sigurnost pre potpisivanja',
  },
  {
    slug: 'krivicno-pravo',
    title: 'Krivično pravo',
    summary: 'Odbrana i zastupanje u krivičnom postupku sa fokusom na pravovremenu i kvalitetnu strategiju.',
    description:
      'Krivični postupak zahteva pravovremenu reakciju, pažljivu analizu činjenica i dokaza i jasno definisanu strategiju odbrane ili zastupanja. U ovakvim situacijama presudno je pravovremeno sagledati procesni položaj stranke, kvalitetno proceniti dokaze i zaštititi prava i interese klijenta u svakoj fazi postupka.',
    services: [
      'Odbrana osumnjičenog i okrivljenog',
      'Prisustvo saslušanju',
      'Odbrana tokom istrage',
      'Zastupanje pred sudom',
      'Izjavljivanje pravnih lekova',
      'Zastupanje oštećenog',
      'Isticanje imovinskopravnog zahteva',
      'Pravna pomoć tokom različitih faza krivičnog postupka',
    ],
    cta: 'Zatražite pravnu pomoć',
  },
  {
    slug: 'naknada-stete',
    title: 'Naknada štete',
    summary: 'Ostvarivanje prava na naknadu štete i zaštita interesa povređenih lica u različitim vrstama štetnih događaja.',
    description:
      'Lice koje je pretrpelo štetu može, kada su ispunjeni zakonski uslovi, zahtevati naknadu materijalne i nematerijalne štete od odgovornog lica ili osiguravajućeg društva. Cilj je da se, na osnovu konkretnog slučaja, precizno utvrdi obim štete i izabere najefikasniji pravni put za njeno ostvarivanje.',
    services: [
      'Saobraćajne nezgode',
      'Povrede na radu',
      'Materijalna šteta',
      'Fizičke bolove',
      'Strah',
      'Duševne bolove',
      'Umanjenje životne aktivnosti',
      'Izgubljena zarada',
      'Odštetni zahtevi prema osiguravajućim društvima',
      'Sudski postupci radi naknade štete',
    ],
    cta: 'Proverite svoje pravo na naknadu štete',
  },
]
