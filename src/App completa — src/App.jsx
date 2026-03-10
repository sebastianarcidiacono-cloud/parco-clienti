import React, { useState } from "react";

// MOCK DATA (puoi sostituirli con dati reali dalla tua Excel/Google Sheet/API)
const POS_DATA = [
  {
    id: 1,
    nome: "Autogrill A1 Milano Sud",
    catena: "Autogrill",
    indirizzo: "A1 Milano – Area Sud",
    tipo: "Highway",
    regole: {
      materiali: {
        digitalExpo: false,
        cashtray: "130 POS in finestre temporali",
        dv: true,
        dz: true,
        totem: "45 POS",
        flexter: "83 POS",
      },
      note: [
        "Evitare visite in orari di punta (colazione/pranzo)",
        "Fissare appuntamento prima di ogni visita",
        "Ordini/lanci solo su SKU chiave o comunicazioni PDC"
      ]
    },
    eniReward: null
  },
  {
    id: 2,
    nome: "ENI Roma Est",
    catena: "ENI",
    indirizzo: "A24 Roma – Uscita Est",
    tipo: "Highway",
    regole: {
      materiali: {
        digitalExpo: true,
        cashtray: true,
        dv: true,
        dz: true,
        totem: false,
        flexter: "56 POS"
      },
      note: [
        "Trattare come un POS GT",
        "Autonomia per ordini lanci senza PDC",
        "Materiali negoziati ma da confermare con il gestore"
      ]
    },
    eniReward: {
      cluster: "T2",
      openCoinTrim: 100,
      visibilityBonus: 50,
      totaleTrim: 150,
      note: "5 Open Coin per ogni kit venduto"
    }
  }
];

// COMPONENTI BASE
const Card = ({ children }) => (
