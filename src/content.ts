// All copy lives here so the page can be re-themed for a product without
// touching layout. Sections read from this file; remove a section by deleting
// it from App.tsx.

export const brand = {
  name: 'SNAP',
  tagline: 'Servis telefonů a PC',
}

export const nav = {
  links: [
    { label: 'Co opravit', href: '#pruvodce' },
    { label: 'Opravy', href: '#features' },
    { label: 'Jak to probíhá', href: '#how' },
    { label: 'Zákazníci', href: '#customers' },
    { label: 'Ceník', href: '#pricing' },
  ],
  signIn: { label: 'Kontakt', href: '#cta' },
  cta: { label: 'Objednat opravu', href: '#cta' },
}

export const hero = {
  badge: 'Diagnostika zdarma',
  title: ['Váš telefon i počítač', 'zase v pořádku'],
  highlight: 'v pořádku',
  description:
    'Prasklý displej, unavená baterie, pomalý notebook nebo fotky v počítači, který už nenaběhne. Zavolejte, řekneme vám cenu předem a většinu oprav zvládneme do 48 hodin.',
  primary: { label: 'Objednat opravu', href: '#cta' },
  secondary: { label: 'Jak to probíhá', href: '#how' },
  footnote: 'Diagnostika je zdarma a k opravě se nezavazujete.',
}

export const logosLabel = 'Opravujeme telefony a počítače značek'

export const logos = ['Apple', 'Samsung', 'Lenovo', 'HP', 'Dell', 'Asus', 'Xiaomi', 'Huawei']

export const guide = {
  eyebrow: 'Začněme tím, co vás trápí',
  title: 'Co spolu dáme do pořádku?',
  description: 'Pár kliknutí a víte, co dál. Bez technických složitostí.',
  deviceStep: '01',
  deviceLabel: 'Vyberte zařízení',
  devices: [
    { key: 'notebook', label: 'Notebook' },
    { key: 'telefon', label: 'Telefon' },
    { key: 'pocitac', label: 'Počítač' },
    { key: 'tablet', label: 'Tablet' },
    { key: 'konzole', label: 'Herní konzole' },
  ],
  serviceStep: '02',
  serviceLabel: 'Co potřebujete řešit?',
  services: {
    notebook: [
      {
        name: 'Čištění a kontrola chlazení',
        price: 'od 900 Kč',
        description: 'Zkontrolujeme chlazení a posoudíme vyčištění i výměnu teplovodivé pasty. Napište nám, kdy se potíže objevují.',
      },
      {
        name: 'Displej a obraz',
        price: 'od 1 900 Kč',
        description: 'Prasklý, blikající nebo tmavý displej. Cenu potvrdíme podle konkrétního modelu a stavu panelu.',
      },
      {
        name: 'Baterie a její výměna',
        price: 'od 1 500 Kč',
        description: 'Vyměníme opotřebenou baterii a otestujeme výdrž. Většinou hotovo do 48 hodin.',
      },
      {
        name: 'Klávesnice, panty a konektory',
        price: 'od 1 200 Kč',
        description: 'Nefunkční klávesy, uvolněné panty nebo opotřebený konektor. Poradíme, co má smysl řešit.',
      },
      {
        name: 'SSD, paměť a vylepšení',
        price: 'od 1 000 Kč',
        description: 'Rychlejší disk a víc paměti pro starší notebook. Data přeneseme a systém necháme běžet.',
      },
      {
        name: 'Systém a nastavení',
        price: 'od 600 Kč',
        description: 'Pomalý start, chyby ve Windows nebo přeinstalace. Nastavíme i zálohu, aby se to neopakovalo.',
      },
      {
        name: 'Kontakt s tekutinou',
        price: 'od 1 900 Kč',
        description: 'Vyčistíme desku a zjistíme, co přežilo. Čím dřív notebook přinesete, tím větší je šance.',
      },
      {
        name: 'Záloha a přenos dat',
        price: 'od 500 Kč',
        description: 'Zkopírujeme fotky, dokumenty i e-maily do nového zařízení. Stačí přinést obě zařízení.',
      },
    ],
    telefon: [
      {
        name: 'Displej a obraz',
        price: 'od 1 900 Kč',
        description: 'Prasklé sklo nebo nefunkční dotyk. Většinu displejů měníme na počkání, cenu řekneme předem.',
      },
      {
        name: 'Baterie a její výměna',
        price: 'od 900 Kč',
        description: 'Telefon nevydrží do večera. Vyměníme baterii, otestujeme výdrž a poradíme s nabíjením.',
      },
      {
        name: 'Nabíjení a nabíjecí konektor',
        price: 'od 800 Kč',
        description: 'Nabíjí jen v určité poloze nebo vůbec. Vyčistíme konektor, případně ho vyměníme.',
      },
      {
        name: 'Reproduktor, mikrofon a kamera',
        price: 'od 700 Kč',
        description: 'Není vás slyšet nebo nesvítí foťák. Zjistíme, jestli jde o díl, nebo o nastavení.',
      },
      {
        name: 'Kontakt s tekutinou',
        price: 'od 1 200 Kč',
        description: 'Vyčistíme desku v ultrazvuku a zkontrolujeme, co šlo. Nechte telefon vypnutý, ať nežhaví dál.',
      },
      {
        name: 'Zadní kryt a mechanické poškození',
        price: 'od 900 Kč',
        description: 'Rozbitá záda, ohnutý rám nebo poškozená kamera. Sladíme vzhled i funkci.',
      },
      {
        name: 'Záloha a přenos dat',
        price: 'od 300 Kč',
        description: 'Přeneseme kontakty, fotky a aplikace do nového telefonu. Nic se neztratí.',
      },
      {
        name: 'Systém a nastavení',
        price: 'od 500 Kč',
        description: 'Zasekaný telefon, neznámé aplikace nebo obnova po pádu. Nastavíme a vysvětlíme, co dál.',
      },
    ],
    pocitac: [
      {
        name: 'Čištění a kontrola chlazení',
        price: 'od 800 Kč',
        description: 'Hlučný nebo přehřívající se počítač. Vyčistíme ventilátory a zkontrolujeme teploty.',
      },
      {
        name: 'Napájení a výměna zdroje',
        price: 'od 1 200 Kč',
        description: 'Počítač se nezapne nebo sám vypadává. Otestujeme zdroj a vyměníme ho za ověřený díl.',
      },
      {
        name: 'SSD, paměť a vylepšení',
        price: 'od 1 000 Kč',
        description: 'Z pomalého počítače uděláme rychlý: nový disk, víc paměti a přenesená data.',
      },
      {
        name: 'Systém a nastavení',
        price: 'od 600 Kč',
        description: 'Přeinstalace, ovladače, viry nebo nefungující tiskárna. Vysvětlíme i údržbu do budoucna.',
      },
      {
        name: 'Sestavení nového PC',
        price: 'od 1 500 Kč',
        description: 'Vybereme díly podle toho, k čemu počítač potřebujete, a složíme ho včetně otestování.',
      },
      {
        name: 'Wi-Fi, Bluetooth a síť',
        price: 'od 500 Kč',
        description: 'Výpadky připojení, slabý signál nebo zmrzlé video. Doladíme síť doma i v kanceláři.',
      },
      {
        name: 'Záloha a přenos dat',
        price: 'od 500 Kč',
        description: 'Nastavíme zálohu, aby se data zálohovala sama, a přeneseme je ze starého počítače.',
      },
    ],
    tablet: [
      {
        name: 'Displej a obraz',
        price: 'od 1 900 Kč',
        description: 'Prasklé sklo, mrtvá část dotyku nebo pruhy v obraze. Cenu ověříme podle modelu.',
      },
      {
        name: 'Baterie a její výměna',
        price: 'od 1 200 Kč',
        description: 'Tablet po chvíli usne nebo se nenabije. Vyměníme baterii a změříme výdrž.',
      },
      {
        name: 'Nabíjení a konektor',
        price: 'od 900 Kč',
        description: 'Kabel drží jen někdy. Vyčistíme nebo vyměníme konektor a zkontrolujeme nabíječku.',
      },
      {
        name: 'Kontakt s tekutinou',
        price: 'od 1 200 Kč',
        description: 'Tablet byl u vody nebo se polil čajem. Vyčistíme desku a řekneme, co ještě jde zachránit.',
      },
      {
        name: 'Systém a nastavení',
        price: 'od 500 Kč',
        description: 'Zpomalený tablet, plná paměť nebo obnova po pádu. Nastavíme a poradíme s údržbou.',
      },
      {
        name: 'Záloha a přenos dat',
        price: 'od 300 Kč',
        description: 'Přeneseme poznámky, fotky a aplikace do nového tabletu, včetně hesel a účtů.',
      },
    ],
    konzole: [
      {
        name: 'Čištění a kontrola chlazení',
        price: 'od 900 Kč',
        description: 'Konzole hučí jak fén. Vyčistíme chlazení a vyměníme pastu, aby vydržela další roky.',
      },
      {
        name: 'Obraz, HDMI a konektory',
        price: 'od 1 500 Kč',
        description: 'Žádný obraz, cukání nebo vadný HDMI port. Otestujeme kabel i konektor na konzoli.',
      },
      {
        name: 'Ovladač a ovládání',
        price: 'od 600 Kč',
        description: 'Drift páčky, nefunkční tlačítko nebo vybitý ovladač. Opravíme nebo doporučíme náhradu.',
      },
      {
        name: 'Napájení konzole',
        price: 'od 1 500 Kč',
        description: 'Konzole se nezapne nebo spadne po chvíli. Projdeme napájení a teploty krok za krokem.',
      },
      {
        name: 'Čtení disků a mechanika',
        price: 'od 1 200 Kč',
        description: 'Hry se nenačítají nebo mechanika vrčí. Zkontrolujeme mechaniku i úložiště.',
      },
      {
        name: 'Systém a aktualizace',
        price: 'od 600 Kč',
        description: 'Zaseknutá aktualizace, chyba při startu nebo přihlášení. Zprovozníme systém a účet.',
      },
    ],
  },
  notes: [
    'Opravujeme také Apple zařízení, především iPhony. Pro iPhone vyberte zařízení Telefon a konkrétní opravu potvrdíme podle modelu a stavu.',
    'Potřebujete servis tiskárny nebo chytrých hodinek? Napište nám model a popis závady, možnosti i cenu posoudíme individuálně.',
    'Pokud se zařízení nakonec neopravuje, stojí diagnostika 200–500 Kč.',
  ],
  recommendedLabel: 'Doporučený další krok',
  priceLabel: 'Orientační cena',
  priceNote: 'Ceny „od“ zahrnují práci, díly i materiál. Konečnou cenu upřesníme podle modelu a stavu zařízení.',
  cta: { label: 'Poptat opravu', href: '#cta' },
  disclaimer: 'Orientační doporučení. Příčinu, cenu a možnosti opravy určí až prohlídka zařízení.',
}

export const features = {
  eyebrow: 'Co pro vás uděláme',
  title: 'Postaráme se o všechno, co se pokazí',
  description: 'Od prasklého skla po záchranu fotek z mrtvého disku. Vysvětlíme, co se stalo, a cenu řekneme dřív, než začneme.',
  items: [
    {
      key: 'collab',
      title: 'Oprava, u které můžete být',
      description: 'Přijďte se podívat, nebo sledujte stav zakázky online. Vždy víte, na čem jste.',
      span: 2,
    },
    {
      key: 'automation',
      title: 'Cena předem',
      description: 'Cenu i dobu opravy řekneme předem.',
      span: 1,
    },
    {
      key: 'analytics',
      title: 'Záchrana dat',
      description: 'Fotky a dokumenty zkusíme dostat ven.',
      span: 1,
    },
    {
      key: 'integrations',
      title: 'Ověřené díly a záruka',
      description: 'Díly, za které ručíme, a 24 měsíců na práci.',
      span: 2,
    },
  ],
}

export const steps = {
  eyebrow: 'Jak to probíhá',
  title: 'Od telefonu k hotové opravě ve třech krocích',
  items: [
    {
      title: 'Zavolejte nebo napište',
      description: 'Popište, co se děje. Poradíme po telefonu a řekneme, jestli se oprava vůbec vyplatí.',
    },
    {
      title: 'Přineste nebo pošlete',
      description: 'Předejte zařízení v prodejně, nebo ho pošlete kurýrem. Diagnostika je zdarma.',
    },
    {
      title: 'Vyzvedněte a zaplaťte',
      description: 'Ozveme se, až bude hotovo. Platíte kartou nebo hotově a na práci máte 24 měsíců záruky.',
    },
  ],
}

export const showcase = {
  eyebrow: 'Přehledně a bez dohadů',
  title: 'Víte, co se s vaším zařízením děje',
  tabs: [
    {
      key: 'inbox',
      title: 'Stav zakázky',
      description: 'Podívejte se, v jaké fázi oprava je, aniž byste museli volat.',
    },
    {
      key: 'board',
      title: 'Průběh opravy',
      description: 'Příjem, diagnostika, oprava, testování a předání. Krok za krokem.',
    },
    {
      key: 'report',
      title: 'Cena a záruka',
      description: 'Kolik zaplatíte a co všechno záruka pokrývá. Vše na jednom místě.',
    },
  ],
}

export const metrics = [
  { value: 18000, suffix: '+', label: 'Opravených zařízení' },
  { value: 4.9, decimals: 1, label: 'Průměrné hodnocení' },
  { value: 48, suffix: ' h', label: 'Běžná doba opravy' },
  { value: 24, label: 'Měsíců záruky na každou opravu' },
]

export const testimonials = {
  eyebrow: 'Zákazníci',
  title: 'Lidé se k nám vracejí a doporučují nás dál',
  items: [
    {
      quote:
        'Displej na iPhonu praskl v pátek odpoledne, v sobotu dopoledne jsem ho měla zpátky. Cena byla přesně ta, kterou mi řekli po telefonu.',
      name: 'Jana Kovářová',
      role: 'Zákaznice, Praha 6',
      hue: 250,
    },
    {
      quote: 'Notebook jsem myslel, že je mrtvý. Vysvětlili mi, co odešlo, a dali mi na výběr. Žádné zbytečné řeči a žádné tlaky.',
      name: 'Petr Dvořák',
      role: 'Zákazník, Brno',
      hue: 170,
    },
    {
      quote: 'Zachránili mi tři roky fotek z poškozeného disku. Doma jsem to vzdala, tady to zvládli za dva dny.',
      name: 'Markéta Vlčková',
      role: 'Zákaznice, Olomouc',
      hue: 20,
    },
    {
      quote: 'Opravili nám čtyři telefony do firmy a vždycky zavolali, když se něco změnilo. Účtenky i záruky chodí mailem.',
      name: 'Tomáš Hrubý',
      role: 'Jednatel, Plzeň',
      hue: 300,
    },
    {
      quote: 'Bála jsem se, že přijdu o všechno v telefonu. Nechali mi ho zálohovat, než začali, a pak jen vyměnili baterii.',
      name: 'Lucie Nováková',
      role: 'Zákaznice, Hradec Králové',
      hue: 120,
    },
    {
      quote: 'Řekli mi na rovinu, že se oprava nevyplatí, a poradili, co koupit místo toho. To se dneska nevidí.',
      name: 'Martin Čermák',
      role: 'Zákazník, Ostrava',
      hue: 40,
    },
  ],
}

export const pricing = {
  eyebrow: 'Ceník',
  title: 'Cenu znáte dřív, než začneme',
  description: 'Diagnostika je zdarma. Zaplatíte jen za opravu, na kterou se domluvíme.',
  currency: 'Kč',
  unit: 'za opravu',
  freeNote: 'zdarma',
  popularLabel: 'Nejčastější',
  yearlyNote: '−10 %',
  billing: { monthly: 'Běžná cena', yearly: 'Se slevou' },
  tiers: [
    {
      name: 'Diagnostika',
      monthly: 0,
      yearly: 0,
      description: 'Nejdřív zjistíme, co se pokazilo.',
      cta: 'Objednat diagnostiku',
      features: ['Kontrola hardwaru i softwaru', 'Cena opravy předem', 'Bez závazku', 'Do 24 hodin'],
    },
    {
      name: 'Běžná oprava',
      monthly: 1290,
      yearly: 1190,
      description: 'Displeje, baterie, klávesnice, čištění.',
      cta: 'Objednat opravu',
      popular: true,
      features: [
        'Většina oprav do 48 hodin',
        'Ověřené díly',
        'Záruka 24 měsíců',
        'Záloha dat před opravou',
        'Stav opravy online',
      ],
    },
    {
      name: 'Náročná oprava',
      monthly: 2490,
      yearly: 2290,
      description: 'Záchrana dat, základní desky, zalití.',
      cta: 'Poradit se',
      features: [
        'Všechno z běžné opravy',
        'Záchrana dat dle domluvy',
        'Oprava po zalití',
        'Náhradní zařízení na dobu opravy',
        'Záruka 24 měsíců',
      ],
    },
  ],
}

export const faq = {
  title: 'Časté otázky',
  items: [
    {
      q: 'Kolik mě oprava bude stát?',
      a: 'Cenu vám řekneme po diagnostice, ještě než začneme. Diagnostika je zdarma a k opravě se nezavazujete. Pokud se oprava nevyplatí, řekneme to na rovinu.',
    },
    {
      q: 'Jak dlouho oprava trvá?',
      a: 'Většinu běžných oprav zvládneme do 48 hodin. Náročnější případy, třeba zalité telefony nebo záchrana dat, bývají tři až pět pracovních dní. Vždy vám zavoláme s odhadem.',
    },
    {
      q: 'Přijdu při opravě o data?',
      a: 'U výměny displeje, baterie nebo klávesnice o data nepřijdete. Když hrozí ztráta, nabídneme zálohu předem. U poškozených disků se záchrana dat řeší individuálně.',
    },
    {
      q: 'Jakou dáváte záruku?',
      a: 'Na každou opravu 24 měsíců. Když se stejná závada vrátí, opravíme ji zdarma. Záruční list dostanete e-mailem spolu s účtenkou.',
    },
    {
      q: 'Můžu zařízení poslat kurýrem?',
      a: 'Ano. Zavolejte nám, domluvíme se na předání a zařízení pošlete na naši adresu. Hotové ho pošleme zpět, u oprav nad 1 500 Kč poštovné hradíme my.',
    },
    {
      q: 'Opravujete i starší zařízení?',
      a: 'Opravujeme. U starších kusů ale nejdřív zkontrolujeme, jestli se oprava ještě vyplatí, a doporučíme, co má smysl.',
    },
  ],
}

export const cta = {
  title: 'Nechte to na nás, ať to zase funguje',
  description: 'Zavolejte nebo napište. Poradíme, co s tím, a cenu řekneme předem.',
  placeholder: 'vas@email.cz',
  button: 'Objednat opravu',
  success: 'Díky! Ozveme se do jednoho pracovního dne.',
  note: 'Ukázkový formulář. Adresy se neukládají a e-mail se neodesílá.',
  enquiryLabel: 'Vybraná oprava',
  clearLabel: 'Zrušit výběr',
}

// Placeholder contact details. Replace every value here with the real shop
// address, phone number, e-mail and opening hours before publishing.
export const contact = {
  addressLines: ['Ukázková 123/4', '110 00 Praha 1'],
  phone: '+420 777 000 000',
  email: 'servis@snap.example',
  hours: [
    { days: 'Po–Pá', time: '9:00–18:00' },
    { days: 'So', time: '9:00–13:00' },
    { days: 'Ne', time: 'zavřeno' },
  ],
  placeholderNote: 'Ukázkové kontaktní údaje. Před spuštěním je nahraďte skutečnou adresou, telefonem a otevírací dobou.',
}

export const footer = {
  blurb: 'Servis telefonů a počítačů. Opravíme, vysvětlíme, poradíme.',
  area: {
    title: 'Kde nás najdete',
    lines: [
      'Prodejna je v centru Prahy, pár kroků od metra.',
      'Po Praze a okolí do 20 km zajedeme za vámi.',
      'Po celé ČR posíláme kurýrem.',
    ],
  },
  columns: [
    { title: 'Opravy', links: ['Telefony', 'Notebooky', 'Počítače', 'Tablety', 'Záchrana dat'] },
    { title: 'Pomoc', links: ['Časté otázky', 'Jak to probíhá', 'Záruka', 'Reklamace', 'Stav opravy'] },
    { title: 'Právní', links: ['Ochrana údajů', 'Obchodní podmínky', 'Cookies', 'Licence'] },
  ],
  legal: `© ${new Date().getFullYear()} SNAP, servis telefonů a PC`,
}
