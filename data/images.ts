/**
 * Demonstration photography only — not official Mana Trendz Macha campaign imagery.
 * Replace these Unsplash URLs with client-supplied assets when available.
 */
const U = "https://images.unsplash.com";

export function photo(
  id: string,
  options: { w?: number; h?: number; q?: number } = {},
) {
  const w = options.w ?? 1200;
  const h = options.h ? `&h=${options.h}` : "";
  const q = options.q ?? 80;
  return `${U}/${id}?auto=format&fit=crop&w=${w}${h}&q=${q}`;
}

export const images = {
  hero: {
    primary: photo("photo-1488161628813-04466f872be2", { w: 1600, h: 2000 }),
    secondary: photo("photo-1492446845049-9c50cc313f00", { w: 900, h: 1200 }),
  },
  featured: {
    street: photo("photo-1516826957135-700dedea698c", { w: 1400, h: 1800 }),
    party: photo("photo-1617127365659-c47fa864d8bc", { w: 1400, h: 1800 }),
    kids: photo("photo-1503454537195-1dcabb73ffb9", { w: 1400, h: 1600 }),
  },
  community: [
    photo("photo-1490578474895-699cd4e2cf59", { w: 800, h: 1000 }),
    photo("photo-1614252235316-8c857d38b5f4", { w: 800, h: 1000 }),
    photo("photo-1607346256330-dee7af15f7c5", { w: 800, h: 1000 }),
    photo("photo-1506794778202-cad84cf45f1d", { w: 800, h: 1000 }),
  ],
  store: photo("photo-1441986300917-64674bd600d8", { w: 1400, h: 900 }),
  about: photo("photo-1441984904996-e0b6ba687e04", { w: 1600, h: 1100 }),
  product: {
    blackShirt: [
      photo("photo-1490114538077-0a7f8cb49891", { w: 900, h: 1200 }),
      photo("photo-1603252109303-2751441dd157", { w: 900, h: 1200 }),
    ],
    creamShirt: [
      photo("photo-1596755094514-f87e34085b2c", { w: 900, h: 1200 }),
      photo("photo-1594938298603-c8148c4dae35", { w: 900, h: 1200 }),
    ],
    graphicTee: [
      photo("photo-1503342217505-b0a15ec3261c", { w: 900, h: 1200 }),
      photo("photo-1576566588028-4147f3842f27", { w: 900, h: 1200 }),
    ],
    cargoJeans: [
      photo("photo-1542272604-787c3835535d", { w: 900, h: 1200 }),
      photo("photo-1541099649105-f69ad21f3246", { w: 900, h: 1200 }),
    ],
    greenShirt: [
      photo("photo-1434389677669-e08b4cac3105", { w: 900, h: 1200 }),
      photo("photo-1490114538077-0a7f8cb49891", { w: 900, h: 1200 }),
    ],
    maroonShirt: [
      photo("photo-1602810318383-e386cc2a3ccf", { w: 900, h: 1200 }),
      photo("photo-1490114538077-0a7f8cb49891", { w: 900, h: 1200 }),
    ],
    oxford: [
      photo("photo-1621072156002-e2fccdc0b176", { w: 900, h: 1200 }),
      photo("photo-1596755094514-f87e34085b2c", { w: 900, h: 1200 }),
    ],
    charcoalJeans: [
      photo("photo-1541099649105-f69ad21f3246", { w: 900, h: 1200 }),
      photo("photo-1555689502-c4b22d76c56f", { w: 900, h: 1200 }),
    ],
    sageCargo: [
      photo("photo-1473966968600-fa801b869a1a", { w: 900, h: 1200 }),
      photo("photo-1506629082955-511b1aa562c8", { w: 900, h: 1200 }),
    ],
    partyShirt: [
      photo("photo-1617137968427-85924c800a22", { w: 900, h: 1200 }),
      photo("photo-1617127365659-c47fa864d8bc", { w: 900, h: 1200 }),
    ],
    rustShirt: [
      photo("photo-1607346256330-dee7af15f7c5", { w: 900, h: 1200 }),
      photo("photo-1596755094514-f87e34085b2c", { w: 900, h: 1200 }),
    ],
    whiteTee: [
      photo("photo-1521572163474-6864f9cf17ab", { w: 900, h: 1200 }),
      photo("photo-1583743814966-8936f5b7be1a", { w: 900, h: 1200 }),
    ],
    inkTee: [
      photo("photo-1576566588028-4147f3842f27", { w: 900, h: 1200 }),
      photo("photo-1521572163474-6864f9cf17ab", { w: 900, h: 1200 }),
    ],
    sandTee: [
      photo("photo-1620799140408-edc6dcb6d633", { w: 900, h: 1200 }),
      photo("photo-1521572163474-6864f9cf17ab", { w: 900, h: 1200 }),
    ],
    washedJeans: [
      photo("photo-1582552938357-32b906df40cb", { w: 900, h: 1200 }),
      photo("photo-1542272604-787c3835535d", { w: 900, h: 1200 }),
    ],
    blackJeans: [
      photo("photo-1475178626620-a4d074967452", { w: 900, h: 1200 }),
      photo("photo-1541099649105-f69ad21f3246", { w: 900, h: 1200 }),
    ],
    oliveCargo: [
      photo("photo-1548883354-7622d03aca27", { w: 900, h: 1200 }),
      photo("photo-1473966968600-fa801b869a1a", { w: 900, h: 1200 }),
    ],
    khakiCargo: [
      photo("photo-1506629082955-511b1aa562c8", { w: 900, h: 1200 }),
      photo("photo-1473966968600-fa801b869a1a", { w: 900, h: 1200 }),
    ],
    satinShirt: [
      photo("photo-1515886657613-9f3515b0c78f", { w: 900, h: 1200 }),
      photo("photo-1617137968427-85924c800a22", { w: 900, h: 1200 }),
    ],
    festiveShirt: [
      photo("photo-1492446845049-9c50cc313f00", { w: 900, h: 1200 }),
      photo("photo-1602810318383-e386cc2a3ccf", { w: 900, h: 1200 }),
    ],
    navyPolo: [
      photo("photo-1618354691373-d851c5c3a990", { w: 900, h: 1200 }),
      photo("photo-1562157873-818bc0726f68", { w: 900, h: 1200 }),
    ],
    linenShirt: [
      photo("photo-1596755094514-f87e34085b2c", { w: 900, h: 1200 }),
      photo("photo-1621072156002-e2fccdc0b176", { w: 900, h: 1200 }),
    ],
    kidsPolo: [
      photo("photo-1503919545889-aef636e10ad4", { w: 900, h: 1200 }),
      photo("photo-1519238263530-99bdd11df2ea", { w: 900, h: 1200 }),
    ],
    kidsTee: [
      photo("photo-1519238263530-99bdd11df2ea", { w: 900, h: 1200 }),
      photo("photo-1503454537195-1dcabb73ffb9", { w: 900, h: 1200 }),
    ],
    kidsDenim: [
      photo("photo-1471286174890-9c112ffca5b4", { w: 900, h: 1200 }),
      photo("photo-1519238263530-99bdd11df2ea", { w: 900, h: 1200 }),
    ],
    kidsParty: [
      photo("photo-1503454537195-1dcabb73ffb9", { w: 900, h: 1200 }),
      photo("photo-1519238263530-99bdd11df2ea", { w: 900, h: 1200 }),
    ],
    kidsShorts: [
      photo("photo-1471286174890-9c112ffca5b4", { w: 900, h: 1200 }),
      photo("photo-1519238263530-99bdd11df2ea", { w: 900, h: 1200 }),
    ],
    kidsCheck: [
      photo("photo-1503919545889-aef636e10ad4", { w: 900, h: 1200 }),
      photo("photo-1471286174890-9c112ffca5b4", { w: 900, h: 1200 }),
    ],
  },
  categories: {
    shirts: photo("photo-1596755094514-f87e34085b2c", { w: 1200, h: 1500 }),
    tees: photo("photo-1521572163474-6864f9cf17ab", { w: 1200, h: 1500 }),
    jeans: photo("photo-1542272604-787c3835535d", { w: 1200, h: 1500 }),
    cargos: photo("photo-1473966968600-fa801b869a1a", { w: 1200, h: 1500 }),
    party: photo("photo-1617127365659-c47fa864d8bc", { w: 1200, h: 1500 }),
    kids: photo("photo-1503454537195-1dcabb73ffb9", { w: 1200, h: 1500 }),
  },
} as const;
