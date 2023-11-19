import smartfonlar from "../components/imgs/smartfonlat.png";
import noutboocklar from "../components/imgs/noutboock.png";
import telivizorlar from "../components/imgs/telivizor.png";
import sovutgich from "../components/imgs/sovutgich.png";
import isitgichlar from "../components/imgs/isitgich.png";
import aqlliKalonka from "../components/imgs/kalonka.png";
import konditsaner from "../components/imgs/konditsaner.png";
import kattaHajimdagiOshxonTexnikasi from "../components/imgs/kattaHajimdagiOshxonaTexnikasi.png";
import aqlliSoat from "../components/imgs/aqilliSoat.png";
import tugmaliTelefonlat from "../components/imgs/tugmaliTelefonlar.png";
import changYutgich from "../components/imgs/changYutgich.png";
import simsizQuloqchinlar from "../components/imgs/simsizQuloqchinlar.png";
import radar from "../components/imgs/radarDetegtorlar.png";
import mikrotolqinliPech from "../components/imgs/mikroTolqinliPech.png";
import portativKalonka from "../components/imgs/kalonka.png";

const scrollData = [
  {
    title: "Smartfonlar va telefonlar",
    img: smartfonlar,
    class: "with",
  },
  {
    title: "Noutbuklar",
    img: noutboocklar,
    class: "with",
  },
  {
    title: "Telivizorlar",
    img: telivizorlar,
    class: "with",
  },
  {
    title: "Sovutgich",
    img: sovutgich,
  },
  {
    title: "Isitgichlar",
    img: isitgichlar,
  },
  {
    title: "Aqlli kalonkalar",
    img: aqlliKalonka,
  },
  {
    title: "Konditsionerlar",
    img: konditsaner,
  },
  {
    title: "Katta hajmdagi oshxona texnikasi",
    img: kattaHajimdagiOshxonTexnikasi,
    class: "with",
  },
  {
    title: "Aqlli-soat",
    img: aqlliSoat,
  },
  {
    title: "Tugmali telefonlar",
    img: tugmaliTelefonlat,
  },
  {
    title: "Chang yutgich",
    img: changYutgich,
    class: "with",
  },
  {
    title: "Simsiz quloqchinlar",
    img: simsizQuloqchinlar,
  },
  {
    title: "Radar-detektorlar",
    img: radar,
  },
  {
    title: "Mikrotolqinli pechlar",
    img: mikrotolqinliPech,
    class: "with",
  },
  {
    title: "Portativ kalonkalar",
    img: portativKalonka,
  },
];

const addetScrolBarId = (addetId) => {
  return addetId?.map((i, index) => (i ? { ...i, id: index } : i));
};

const scrolBarData = addetScrolBarId(scrollData);

export default scrolBarData;
