let items = [
  {
    "name": "blankItem",
    "category": 11,
    "priority": 34,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Apprentice's Practice Materials",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 11,
    "priority": 45,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Arrowwood Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 8,
    "quantity": 453,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ash Plank",
    "backgroundPosX": -181,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 26,
    "quantity": 395,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Astral Archon Egg",
    "backgroundPosX": -269,
    "backgroundPosY": -5,
    "category": 14,
    "priority": 13,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Augmented Ala Mhigan Bottoms of Crafting",
    "backgroundPosX": -357,
    "backgroundPosY": -5,
    "category": 0,
    "priority": 0,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Augmented Ala Mhigan Doublet of Crafting",
    "backgroundPosX": -445,
    "backgroundPosY": -5,
    "category": 0,
    "priority": 0,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Augmented Ala Mhigan Gloves of Crafting",
    "backgroundPosX": -533,
    "backgroundPosY": -5,
    "category": 0,
    "priority": 0,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Augmented Ala Mhigan Shoes of Crafting",
    "backgroundPosX": -621,
    "backgroundPosY": -5,
    "category": 0,
    "priority": 0,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Augmented Ala Mhigan Turban of Crafting",
    "backgroundPosX": -709,
    "backgroundPosY": -5,
    "category": 0,
    "priority": 0,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bark Brown Dye",
    "backgroundPosX": -797,
    "backgroundPosY": -5,
    "category": 3,
    "priority": 3,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Basilisk Leather",
    "backgroundPosX": -885,
    "backgroundPosY": -5,
    "category": 6,
    "priority": 4,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Basilisk Skin",
    "backgroundPosX": -973,
    "backgroundPosY": -5,
    "category": 6,
    "priority": 15,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bee Basket",
    "backgroundPosX": -1061,
    "backgroundPosY": -5,
    "category": 12,
    "priority": 6,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Biast Skin",
    "backgroundPosX": -1149,
    "backgroundPosY": -5,
    "category": 6,
    "priority": 19,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bind Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -533,
    "category": 9,
    "priority": 25,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bitter Heart Chocolate",
    "backgroundPosX": -1237,
    "backgroundPosY": -5,
    "category": 9,
    "priority": 4,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Bombard Ash",
    "backgroundPosX": -1325,
    "backgroundPosY": -5,
    "category": 14,
    "priority": 25,
    "quantity": 7,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Drop",
    "backgroundPosX": -5,
    "backgroundPosY": -93,
    "category": 9,
    "priority": 16,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Mor Dhonan Slag",
    "backgroundPosX": -93,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 44,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black O'Ghomoro Slag",
    "backgroundPosX": -93,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 27,
    "quantity": 21,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Odoshi Cord",
    "backgroundPosX": -181,
    "backgroundPosY": -93,
    "category": 16,
    "priority": 4,
    "quantity": 16,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Quartz",
    "backgroundPosX": -269,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 19,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Sagolii Slag",
    "backgroundPosX": -357,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 32,
    "quantity": 24,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Tinolqa Slag",
    "backgroundPosX": -445,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 37,
    "quantity": 18,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Urushi",
    "backgroundPosX": -1413,
    "backgroundPosY": -181,
    "category": 16,
    "priority": 2,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Black Usagi Kabuto",
    "backgroundPosX": -533,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 4,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blind Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -621,
    "category": 9,
    "priority": 21,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blood Red Dye",
    "backgroundPosX": -621,
    "backgroundPosY": -93,
    "category": 3,
    "priority": 2,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blue Abalathian Slag",
    "backgroundPosX": -709,
    "backgroundPosY": -93,
    "category": 15,
    "priority": 40,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blue Archon Egg",
    "backgroundPosX": -797,
    "backgroundPosY": -93,
    "category": 14,
    "priority": 19,
    "quantity": 127,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blue Bombard Ash",
    "backgroundPosX": -885,
    "backgroundPosY": -93,
    "category": 14,
    "priority": 24,
    "quantity": 6,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blue Drop",
    "backgroundPosX": -973,
    "backgroundPosY": -93,
    "category": 9,
    "priority": 12,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Blue Odoshi Cord",
    "backgroundPosX": -1061,
    "backgroundPosY": -93,
    "category": 16,
    "priority": 5,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bombard Ash",
    "backgroundPosX": -1149,
    "backgroundPosY": -93,
    "category": 14,
    "priority": 21,
    "quantity": 380,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Box Turtle",
    "backgroundPosX": -1237,
    "backgroundPosY": -93,
    "category": 13,
    "priority": 4,
    "quantity": 372,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brass Dish",
    "backgroundPosX": -1325,
    "backgroundPosY": -93,
    "category": 11,
    "priority": 31,
    "quantity": 100,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brass Gobcog",
    "backgroundPosX": -5,
    "backgroundPosY": -181,
    "category": 11,
    "priority": 16,
    "quantity": 86,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brass Plate",
    "backgroundPosX": -93,
    "backgroundPosY": -181,
    "category": 10,
    "priority": 3,
    "quantity": 337,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brass Rivets",
    "backgroundPosX": -181,
    "backgroundPosY": -181,
    "category": 10,
    "priority": 7,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brilliant Archon Egg",
    "backgroundPosX": -269,
    "backgroundPosY": -181,
    "category": 14,
    "priority": 5,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brittle Motley Egg",
    "backgroundPosX": -357,
    "backgroundPosY": -181,
    "category": 14,
    "priority": 20,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Bronze Amalj'ok",
    "backgroundPosX": -445,
    "backgroundPosY": -181,
    "category": 11,
    "priority": 10,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brown Abalathian Slag",
    "backgroundPosX": -533,
    "backgroundPosY": -181,
    "category": 15,
    "priority": 39,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brown O'Ghomoro Slag",
    "backgroundPosX": -621,
    "backgroundPosY": -181,
    "category": 15,
    "priority": 24,
    "quantity": 21,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brown Sagolii Slag",
    "backgroundPosX": -709,
    "backgroundPosY": -181,
    "category": 15,
    "priority": 29,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Brown Tinolqa Slag",
    "backgroundPosX": -797,
    "backgroundPosY": -181,
    "category": 15,
    "priority": 34,
    "quantity": 18,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Buffalo Hide",
    "backgroundPosX": -885,
    "backgroundPosY": -181,
    "category": 6,
    "priority": 9,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Buffalo Horn",
    "backgroundPosX": -973,
    "backgroundPosY": -181,
    "category": 1,
    "priority": 1,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Buffalo Leather",
    "backgroundPosX": -1061,
    "backgroundPosY": -181,
    "category": 6,
    "priority": 1,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Cedar Plank",
    "backgroundPosX": -1149,
    "backgroundPosY": -181,
    "category": 7,
    "priority": 25,
    "quantity": 6,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ceruleum Blue Dye",
    "backgroundPosX": -1237,
    "backgroundPosY": -181,
    "category": 3,
    "priority": 6,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Chalk",
    "backgroundPosX": -1325,
    "backgroundPosY": -181,
    "category": 12,
    "priority": 4,
    "quantity": 176,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Cherry Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 12,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Chestnut Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 14,
    "quantity": 129,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Chestnut Log",
    "backgroundPosX": -181,
    "backgroundPosY": -269,
    "category": 7,
    "priority": 7,
    "quantity": 958,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Chestnut Lumber",
    "backgroundPosX": -269,
    "backgroundPosY": -269,
    "category": 7,
    "priority": 4,
    "quantity": 715,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Chestnut Plank",
    "backgroundPosX": -357,
    "backgroundPosY": -269,
    "category": 7,
    "priority": 29,
    "quantity": 88,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Clear Drop",
    "backgroundPosX": -445,
    "backgroundPosY": -269,
    "category": 9,
    "priority": 13,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Coal Tar",
    "backgroundPosX": -621,
    "backgroundPosY": -269,
    "category": 12,
    "priority": 2,
    "quantity": 276,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Cockatrice Feather",
    "backgroundPosX": -709,
    "backgroundPosY": -269,
    "category": 2,
    "priority": 4,
    "quantity": 181,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Condor Feather",
    "backgroundPosX": -797,
    "backgroundPosY": -269,
    "category": 2,
    "priority": 6,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Consecrated Chocolate",
    "backgroundPosX": -357,
    "backgroundPosY": -885,
    "category": 9,
    "priority": 5,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Copper Dust",
    "backgroundPosX": -885,
    "backgroundPosY": -269,
    "category": 10,
    "priority": 9,
    "quantity": 156,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Copper Plate",
    "backgroundPosX": -973,
    "backgroundPosY": -269,
    "category": 10,
    "priority": 2,
    "quantity": 270,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Copper Rivets",
    "backgroundPosX": -1061,
    "backgroundPosY": -269,
    "category": 10,
    "priority": 6,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Cotton Stuffing",
    "backgroundPosX": -1149,
    "backgroundPosY": -269,
    "category": 2,
    "priority": 3,
    "quantity": 890,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Cracked Shepherd's Belt",
    "backgroundPosX": -5,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 9,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Dalamud Nut",
    "backgroundPosX": -1237,
    "backgroundPosY": -269,
    "category": 5,
    "priority": 3,
    "quantity": 28,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Darksteel Amalj'ok",
    "backgroundPosX": -1325,
    "backgroundPosY": -269,
    "category": 11,
    "priority": 12,
    "quantity": 17,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Deaspected Cluster",
    "backgroundPosX": -5,
    "backgroundPosY": -357,
    "category": 11,
    "priority": 20,
    "quantity": 37,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Deaspected Crystal",
    "backgroundPosX": -93,
    "backgroundPosY": -357,
    "category": 11,
    "priority": 19,
    "quantity": 308,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Demonic Cookie",
    "backgroundPosX": -797,
    "backgroundPosY": -1325,
    "category": 9,
    "priority": 6,
    "quantity": 22,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dexterity Materia VI",
    "backgroundPosX": -357,
    "backgroundPosY": -709,
    "category": 8,
    "priority": 9,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dormouse Pelt",
    "backgroundPosX": -269,
    "backgroundPosY": -357,
    "category": 6,
    "priority": 10,
    "quantity": 153,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Drake Skin",
    "backgroundPosX": -357,
    "backgroundPosY": -357,
    "category": 6,
    "priority": 17,
    "quantity": 256,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Boots Materials",
    "backgroundPosX": -533,
    "backgroundPosY": -357,
    "category": 6,
    "priority": 20,
    "quantity": 14,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Boots",
    "backgroundPosX": -445,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 3,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Hat Materials",
    "backgroundPosX": -709,
    "backgroundPosY": -357,
    "category": 2,
    "priority": 1,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Hat",
    "backgroundPosX": -621,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 1,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Tunic Materials",
    "backgroundPosX": -885,
    "backgroundPosY": -357,
    "category": 2,
    "priority": 2,
    "quantity": 15,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Dream Tunic",
    "backgroundPosX": -797,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 2,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Earth Archon Egg",
    "backgroundPosX": -973,
    "backgroundPosY": -357,
    "category": 14,
    "priority": 10,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Earth Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 4,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Earth Moraine",
    "backgroundPosX": -1061,
    "backgroundPosY": -357,
    "category": 15,
    "priority": 9,
    "quantity": 13,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ebony Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 21,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ebony Plank",
    "backgroundPosX": -1237,
    "backgroundPosY": -357,
    "category": 7,
    "priority": 37,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Egg Harness",
    "backgroundPosX": -1413,
    "backgroundPosY": -269,
    "category": 14,
    "priority": 27,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Electrum Plate",
    "backgroundPosX": -1325,
    "backgroundPosY": -357,
    "category": 10,
    "priority": 5,
    "quantity": 20,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Elm Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 13,
    "quantity": 118,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Elm Plank",
    "backgroundPosX": -181,
    "backgroundPosY": -445,
    "category": 7,
    "priority": 27,
    "quantity": 28,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Faded Page",
    "backgroundPosX": -269,
    "backgroundPosY": -445,
    "category": 11,
    "priority": 21,
    "quantity": 30,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Fire Archon Egg",
    "backgroundPosX": -357,
    "backgroundPosY": -445,
    "category": 14,
    "priority": 7,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Fire Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 1,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Firefly Elytron",
    "backgroundPosX": -445,
    "backgroundPosY": -445,
    "category": 1,
    "priority": 9,
    "quantity": 86,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Flint Stone",
    "backgroundPosX": -533,
    "backgroundPosY": -445,
    "category": 15,
    "priority": 16,
    "quantity": 781,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Frayed Chef's Belt",
    "backgroundPosX": -5,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 8,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Gagaroon Luck-die",
    "backgroundPosX": -621,
    "backgroundPosY": -445,
    "category": 11,
    "priority": 14,
    "quantity": 24,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Gloom Purple Dye",
    "backgroundPosX": -709,
    "backgroundPosY": -445,
    "category": 3,
    "priority": 7,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Gnat Wing",
    "backgroundPosX": -797,
    "backgroundPosY": -445,
    "category": 1,
    "priority": 6,
    "quantity": 95,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Goblin Mask",
    "backgroundPosX": -885,
    "backgroundPosY": -445,
    "category": 11,
    "priority": 33,
    "quantity": 13,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Gold Dust",
    "backgroundPosX": -973,
    "backgroundPosY": -445,
    "category": 10,
    "priority": 11,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Gold Gobcog",
    "backgroundPosX": -1061,
    "backgroundPosY": -445,
    "category": 11,
    "priority": 18,
    "quantity": 6,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Gold Nugget",
    "backgroundPosX": -1149,
    "backgroundPosY": -445,
    "category": 10,
    "priority": 1,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Goobbue Grey Dye",
    "backgroundPosX": -1237,
    "backgroundPosY": -445,
    "category": 3,
    "priority": 1,
    "quantity": 8,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Goobbue Skin",
    "backgroundPosX": -1325,
    "backgroundPosY": -445,
    "category": 6,
    "priority": 18,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 2 Carbonized Matter",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 11,
    "priority": 41,
    "quantity": 46,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 2 Clear Prism",
    "backgroundPosX": -533,
    "backgroundPosY": -269,
    "category": 11,
    "priority": 37,
    "quantity": 22,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 3 Carbonized Matter",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 11,
    "priority": 42,
    "quantity": 23,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 3 Clear Prism",
    "backgroundPosX": -533,
    "backgroundPosY": -269,
    "category": 11,
    "priority": 38,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 4 Carbonized Matter",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 11,
    "priority": 43,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 4 Clear Prism",
    "backgroundPosX": -533,
    "backgroundPosY": -269,
    "category": 11,
    "priority": 39,
    "quantity": 17,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 5 Carbonized Matter",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 11,
    "priority": 44,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grade 5 Clear Prism",
    "backgroundPosX": -533,
    "backgroundPosY": -269,
    "category": 11,
    "priority": 40,
    "quantity": 33,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Greasy Half Apron",
    "backgroundPosX": -181,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 7,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Green Archon Egg",
    "backgroundPosX": -5,
    "backgroundPosY": -533,
    "category": 14,
    "priority": 16,
    "quantity": 46,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Green Bombard Ash",
    "backgroundPosX": -93,
    "backgroundPosY": -533,
    "category": 14,
    "priority": 23,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Green Drop",
    "backgroundPosX": -181,
    "backgroundPosY": -533,
    "category": 9,
    "priority": 18,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Green Tinolqa Slag",
    "backgroundPosX": -269,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 33,
    "quantity": 52,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grey Abalathian Slag",
    "backgroundPosX": -357,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 41,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grey Mor Dhonan Slag",
    "backgroundPosX": -445,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 46,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grey O'Ghomoro Slag",
    "backgroundPosX": -533,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 26,
    "quantity": 11,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grey Sagolii Slag",
    "backgroundPosX": -621,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 31,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Grey Tinolqa Slag",
    "backgroundPosX": -709,
    "backgroundPosY": -533,
    "category": 15,
    "priority": 36,
    "quantity": 25,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Halatali Yellow Dye",
    "backgroundPosX": -797,
    "backgroundPosY": -533,
    "category": 3,
    "priority": 4,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Heart Chocolate",
    "backgroundPosX": -1237,
    "backgroundPosY": -5,
    "category": 9,
    "priority": 2,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Heavy Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -709,
    "category": 9,
    "priority": 26,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hedgemole Spine",
    "backgroundPosX": -885,
    "backgroundPosY": -533,
    "category": 1,
    "priority": 11,
    "quantity": 49,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hellhound Fang",
    "backgroundPosX": -973,
    "backgroundPosY": -533,
    "category": 1,
    "priority": 4,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hellhound Hide",
    "backgroundPosX": -1061,
    "backgroundPosY": -533,
    "category": 6,
    "priority": 13,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hippogryph Talon",
    "backgroundPosX": -1149,
    "backgroundPosY": -533,
    "category": 1,
    "priority": 2,
    "quantity": 262,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hog Hide",
    "backgroundPosX": -1237,
    "backgroundPosY": -533,
    "category": 6,
    "priority": 12,
    "quantity": 102,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Hourglass Biscuit",
    "backgroundPosX": -1325,
    "backgroundPosY": -533,
    "category": 9,
    "priority": 10,
    "quantity": 58,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ice Archon Egg",
    "backgroundPosX": -5,
    "backgroundPosY": -621,
    "category": 14,
    "priority": 8,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ice Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 2,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ice Moraine",
    "backgroundPosX": -93,
    "backgroundPosY": -621,
    "category": 15,
    "priority": 7,
    "quantity": 6,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Indigo Quartz",
    "backgroundPosX": -181,
    "backgroundPosY": -621,
    "category": 15,
    "priority": 17,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Intelligence Materia VI",
    "backgroundPosX": -357,
    "backgroundPosY": -709,
    "category": 8,
    "priority": 10,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Iron Amalj'ok",
    "backgroundPosX": -269,
    "backgroundPosY": -621,
    "category": 11,
    "priority": 11,
    "quantity": 65,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ixali Ebonknot",
    "backgroundPosX": -357,
    "backgroundPosY": -621,
    "category": 11,
    "priority": 3,
    "quantity": 28,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ixali Mapleknot",
    "backgroundPosX": -445,
    "backgroundPosY": -621,
    "category": 11,
    "priority": 2,
    "quantity": 57,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ixali Willowknot",
    "backgroundPosX": -533,
    "backgroundPosY": -621,
    "category": 11,
    "priority": 1,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Jackal Fang",
    "backgroundPosX": -621,
    "backgroundPosY": -621,
    "category": 1,
    "priority": 5,
    "quantity": 383,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Jackal Hide",
    "backgroundPosX": -709,
    "backgroundPosY": -621,
    "category": 6,
    "priority": 6,
    "quantity": 311,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Kabuto Mask",
    "backgroundPosX": -797,
    "backgroundPosY": -621,
    "category": 16,
    "priority": 6,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ladybug Elytron",
    "backgroundPosX": -885,
    "backgroundPosY": -621,
    "category": 1,
    "priority": 8,
    "quantity": 185,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lauan Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 9,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lauan Log",
    "backgroundPosX": -1061,
    "backgroundPosY": -621,
    "category": 7,
    "priority": 5,
    "quantity": 145,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lauan Lumber",
    "backgroundPosX": -1149,
    "backgroundPosY": -621,
    "category": 7,
    "priority": 1,
    "quantity": 137,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lauan Plank",
    "backgroundPosX": -1237,
    "backgroundPosY": -621,
    "category": 7,
    "priority": 22,
    "quantity": 16,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lightning Archon Egg",
    "backgroundPosX": -1325,
    "backgroundPosY": -621,
    "category": 14,
    "priority": 11,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lightning Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 5,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lindwurm Skin",
    "backgroundPosX": -5,
    "backgroundPosY": -709,
    "category": 6,
    "priority": 16,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Lunar Curtain",
    "backgroundPosX": -93,
    "backgroundPosY": -709,
    "category": 12,
    "priority": 1,
    "quantity": 43,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mahogany Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 19,
    "quantity": 703,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mahogany Plank",
    "backgroundPosX": -269,
    "backgroundPosY": -709,
    "category": 7,
    "priority": 34,
    "quantity": 98,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Maple Plank",
    "backgroundPosX": -445,
    "backgroundPosY": -709,
    "category": 7,
    "priority": 23,
    "quantity": 571,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Marmot Pelt",
    "backgroundPosX": -533,
    "backgroundPosY": -709,
    "category": 6,
    "priority": 8,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Midnight Archon Egg",
    "backgroundPosX": -621,
    "backgroundPosY": -709,
    "category": 14,
    "priority": 6,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Bow",
    "backgroundPosX": -709,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 22,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Gorget",
    "backgroundPosX": -797,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 25,
    "quantity": 10,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Helm",
    "backgroundPosX": -885,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 24,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Leggings",
    "backgroundPosX": -973,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 27,
    "quantity": 5,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Longboots",
    "backgroundPosX": -1061,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 26,
    "quantity": 14,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Poultice",
    "backgroundPosX": -1149,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 28,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Rations",
    "backgroundPosX": -1237,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 29,
    "quantity": 15,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Militia Sword",
    "backgroundPosX": -1325,
    "backgroundPosY": -709,
    "category": 11,
    "priority": 23,
    "quantity": 21,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mind Materia VI",
    "backgroundPosX": -357,
    "backgroundPosY": -709,
    "category": 8,
    "priority": 11,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mission Ceruleum Voucher",
    "backgroundPosX": -93,
    "backgroundPosY": -797,
    "category": 11,
    "priority": 36,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mission Ceruleum",
    "backgroundPosX": -5,
    "backgroundPosY": -797,
    "category": 11,
    "priority": 35,
    "quantity": 127,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Miter Shell",
    "backgroundPosX": -181,
    "backgroundPosY": -797,
    "category": 13,
    "priority": 7,
    "quantity": 95,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Mizzenmast Biscuit",
    "backgroundPosX": -269,
    "backgroundPosY": -797,
    "category": 9,
    "priority": 8,
    "quantity": 7,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Moon Nut",
    "backgroundPosX": -357,
    "backgroundPosY": -797,
    "category": 5,
    "priority": 4,
    "quantity": 25,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Moss Green Dye",
    "backgroundPosX": -445,
    "backgroundPosY": -797,
    "category": 3,
    "priority": 5,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Nakki Leather",
    "backgroundPosX": -533,
    "backgroundPosY": -797,
    "category": 6,
    "priority": 3,
    "quantity": 223,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Nakki Skin",
    "backgroundPosX": -621,
    "backgroundPosY": -797,
    "category": 6,
    "priority": 11,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Nanapasi's Happy Smile Super Wish Bag",
    "backgroundPosX": -709,
    "backgroundPosY": -797,
    "category": 14,
    "priority": 1,
    "quantity": 5,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Navigator's Ear",
    "backgroundPosX": -797,
    "backgroundPosY": -797,
    "category": 13,
    "priority": 3,
    "quantity": 20,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Nephrite",
    "backgroundPosX": -885,
    "backgroundPosY": -797,
    "category": 15,
    "priority": 21,
    "quantity": 45,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Nether Newt",
    "backgroundPosX": -973,
    "backgroundPosY": -797,
    "category": 13,
    "priority": 5,
    "quantity": 8,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Oak Plank",
    "backgroundPosX": -1061,
    "backgroundPosY": -797,
    "category": 7,
    "priority": 32,
    "quantity": 192,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Over-aspected Crystal",
    "backgroundPosX": -1149,
    "backgroundPosY": -797,
    "category": 9,
    "priority": 27,
    "quantity": 14,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Paramour Barding",
    "backgroundPosX": -1413,
    "backgroundPosY": -445,
    "category": 0,
    "priority": 0,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Peach Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 11,
    "quantity": 215,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Peperoon Fate-die",
    "backgroundPosX": -1325,
    "backgroundPosY": -797,
    "category": 11,
    "priority": 15,
    "quantity": 8,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Pine Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 16,
    "quantity": 165,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Pine Plank",
    "backgroundPosX": -93,
    "backgroundPosY": -885,
    "category": 7,
    "priority": 31,
    "quantity": 30,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Poison Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -797,
    "category": 9,
    "priority": 22,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Powdered Sugar",
    "backgroundPosX": -181,
    "backgroundPosY": -885,
    "category": 5,
    "priority": 6,
    "quantity": 122,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Pristine Archon Egg",
    "backgroundPosX": -269,
    "backgroundPosY": -885,
    "category": 14,
    "priority": 3,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Pure Heart Chocolate",
    "backgroundPosX": -357,
    "backgroundPosY": -885,
    "category": 9,
    "priority": 3,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Purple Drop",
    "backgroundPosX": -445,
    "backgroundPosY": -885,
    "category": 9,
    "priority": 14,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Purple Sagolii Slag",
    "backgroundPosX": -533,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 28,
    "quantity": 8,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ququroon Doom-die",
    "backgroundPosX": -621,
    "backgroundPosY": -885,
    "category": 11,
    "priority": 13,
    "quantity": 33,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Earth Moraine",
    "backgroundPosX": -709,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 13,
    "quantity": 30,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Earth",
    "backgroundPosX": -797,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 4,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Fire",
    "backgroundPosX": -885,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 1,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Ice",
    "backgroundPosX": -973,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 2,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Lightning",
    "backgroundPosX": -1061,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 5,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Water",
    "backgroundPosX": -1149,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 6,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Eye of Wind",
    "backgroundPosX": -1237,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 3,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Ice Moraine",
    "backgroundPosX": -1325,
    "backgroundPosY": -885,
    "category": 15,
    "priority": 11,
    "quantity": 42,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Water Moraine",
    "backgroundPosX": -5,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 14,
    "quantity": 29,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Radiant Wind Moraine",
    "backgroundPosX": -93,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 12,
    "quantity": 24,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Raptor Talon",
    "backgroundPosX": -181,
    "backgroundPosY": -973,
    "category": 1,
    "priority": 3,
    "quantity": 423,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rat Pelt",
    "backgroundPosX": -269,
    "backgroundPosY": -973,
    "category": 6,
    "priority": 5,
    "quantity": 316,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Ratstool",
    "backgroundPosX": -357,
    "backgroundPosY": -973,
    "category": 5,
    "priority": 2,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rattan Lumber",
    "backgroundPosX": -445,
    "backgroundPosY": -973,
    "category": 7,
    "priority": 3,
    "quantity": 56,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Raw Urushi",
    "backgroundPosX": -1413,
    "backgroundPosY": -181,
    "category": 16,
    "priority": 1,
    "quantity": 44,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red Abalathian Slag",
    "backgroundPosX": -533,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 38,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red Archon Egg",
    "backgroundPosX": -621,
    "backgroundPosY": -973,
    "category": 14,
    "priority": 15,
    "quantity": 38,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red Bombard Ash",
    "backgroundPosX": -709,
    "backgroundPosY": -973,
    "category": 14,
    "priority": 22,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red Drop",
    "backgroundPosX": -797,
    "backgroundPosY": -973,
    "category": 9,
    "priority": 11,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red Mor Dhonan Slag",
    "backgroundPosX": -885,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 43,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Red O'Ghomoro Slag",
    "backgroundPosX": -973,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 23,
    "quantity": 11,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Resin",
    "backgroundPosX": -1149,
    "backgroundPosY": -973,
    "category": 12,
    "priority": 5,
    "quantity": 967,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "River Sand",
    "backgroundPosX": -1237,
    "backgroundPosY": -973,
    "category": 15,
    "priority": 48,
    "quantity": 896,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Roost Biscuit",
    "backgroundPosX": -1325,
    "backgroundPosY": -973,
    "category": 9,
    "priority": 9,
    "quantity": 25,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rope",
    "backgroundPosX": -5,
    "backgroundPosY": -1061,
    "category": 11,
    "priority": 30,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rosewood Plank",
    "backgroundPosX": -93,
    "backgroundPosY": -1061,
    "category": 7,
    "priority": 36,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rubber Band",
    "backgroundPosX": -181,
    "backgroundPosY": -1061,
    "category": 12,
    "priority": 3,
    "quantity": 15,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Rubber Sole",
    "backgroundPosX": -269,
    "backgroundPosY": -1061,
    "category": 16,
    "priority": 3,
    "quantity": 209,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Salamander Tail",
    "backgroundPosX": -357,
    "backgroundPosY": -1061,
    "category": 5,
    "priority": 1,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Scallop Shell",
    "backgroundPosX": -445,
    "backgroundPosY": -1061,
    "category": 13,
    "priority": 6,
    "quantity": 857,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sea Sand",
    "backgroundPosX": -533,
    "backgroundPosY": -1061,
    "category": 15,
    "priority": 49,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silence Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -885,
    "category": 9,
    "priority": 20,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Dust",
    "backgroundPosX": -621,
    "backgroundPosY": -1061,
    "category": 10,
    "priority": 10,
    "quantity": 20,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Gobcog",
    "backgroundPosX": -709,
    "backgroundPosY": -1061,
    "category": 11,
    "priority": 17,
    "quantity": 6,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Goblet",
    "backgroundPosX": -797,
    "backgroundPosY": -1061,
    "category": 11,
    "priority": 32,
    "quantity": 5,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Leaf",
    "backgroundPosX": -885,
    "backgroundPosY": -1061,
    "category": 10,
    "priority": 12,
    "quantity": 75,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Plate",
    "backgroundPosX": -973,
    "backgroundPosY": -1061,
    "category": 10,
    "priority": 4,
    "quantity": 445,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Rivets",
    "backgroundPosX": -1061,
    "backgroundPosY": -1061,
    "category": 10,
    "priority": 8,
    "quantity": 177,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Silver Usagi Kabuto",
    "backgroundPosX": -1149,
    "backgroundPosY": -1061,
    "category": 4,
    "priority": 5,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sleep Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -973,
    "category": 9,
    "priority": 24,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Slow Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -1061,
    "category": 9,
    "priority": 19,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Speed Belt",
    "backgroundPosX": -1237,
    "backgroundPosY": -1061,
    "category": 0,
    "priority": 0,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Spruce Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 17,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Spruce Plank",
    "backgroundPosX": -5,
    "backgroundPosY": -1149,
    "category": 7,
    "priority": 33,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Squirrel Pelt",
    "backgroundPosX": -93,
    "backgroundPosY": -1149,
    "category": 6,
    "priority": 7,
    "quantity": 161,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Starlight Barding",
    "backgroundPosX": -1413,
    "backgroundPosY": -357,
    "category": 14,
    "priority": 28,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Strength Materia VI",
    "backgroundPosX": -357,
    "backgroundPosY": -709,
    "category": 8,
    "priority": 7,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Stun Ward Potion",
    "backgroundPosX": -1413,
    "backgroundPosY": -1149,
    "category": 9,
    "priority": 23,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sunflower Seeds",
    "backgroundPosX": -181,
    "backgroundPosY": -1149,
    "category": 5,
    "priority": 5,
    "quantity": 323,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Supple Spruce Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 18,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sylphic Brownleaf",
    "backgroundPosX": -357,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 4,
    "quantity": 16,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sylphic Redleaf",
    "backgroundPosX": -445,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 6,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sylphic Yellowleaf",
    "backgroundPosX": -533,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 5,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Sylvan Silk Belt",
    "backgroundPosX": -533,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 10,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Teak Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 20,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Teak Plank",
    "backgroundPosX": -709,
    "backgroundPosY": -1149,
    "category": 7,
    "priority": 35,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Thorne Dynasty Map",
    "backgroundPosX": -797,
    "backgroundPosY": -1149,
    "category": 14,
    "priority": 2,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Titan Copperpiece",
    "backgroundPosX": -885,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 7,
    "quantity": 510,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Titan Electrumpiece",
    "backgroundPosX": -973,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 9,
    "quantity": 11,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Titan Mythrilpiece",
    "backgroundPosX": -1061,
    "backgroundPosY": -1149,
    "category": 11,
    "priority": 8,
    "quantity": 38,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Tortoiseshell",
    "backgroundPosX": -1149,
    "backgroundPosY": -1149,
    "category": 1,
    "priority": 10,
    "quantity": 44,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Tricorn",
    "backgroundPosX": -1237,
    "backgroundPosY": -1149,
    "category": 13,
    "priority": 1,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Umbral Archon Egg",
    "backgroundPosX": -1325,
    "backgroundPosY": -1149,
    "category": 14,
    "priority": 14,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Umbral Eye",
    "backgroundPosX": -5,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 22,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Umbral Moraine",
    "backgroundPosX": -93,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 15,
    "quantity": 52,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Uncultured Pearl",
    "backgroundPosX": -181,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 20,
    "quantity": 120,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Usagi Kabuto",
    "backgroundPosX": -269,
    "backgroundPosY": -1237,
    "category": 4,
    "priority": 6,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Vibrant Archon Egg",
    "backgroundPosX": -357,
    "backgroundPosY": -1237,
    "category": 14,
    "priority": 4,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Violet Archon Egg",
    "backgroundPosX": -445,
    "backgroundPosY": -1237,
    "category": 14,
    "priority": 18,
    "quantity": 12,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Vitality Materia VI",
    "backgroundPosX": -357,
    "backgroundPosY": -709,
    "category": 8,
    "priority": 8,
    "quantity": 50,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Vulture Feather",
    "backgroundPosX": -533,
    "backgroundPosY": -1237,
    "category": 2,
    "priority": 5,
    "quantity": 165,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Walnut Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 15,
    "quantity": 883,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Walnut Plank",
    "backgroundPosX": -709,
    "backgroundPosY": -1237,
    "category": 7,
    "priority": 30,
    "quantity": 30,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Water Archon Egg",
    "backgroundPosX": -797,
    "backgroundPosY": -1237,
    "category": 14,
    "priority": 12,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Water Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 6,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Water Moraine",
    "backgroundPosX": -885,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 10,
    "quantity": 8,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Weevil Elytron",
    "backgroundPosX": -973,
    "backgroundPosY": -1237,
    "category": 1,
    "priority": 7,
    "quantity": 329,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wet Bombard Ash",
    "backgroundPosX": -1061,
    "backgroundPosY": -1237,
    "category": 14,
    "priority": 26,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "White Abalathian Slag",
    "backgroundPosX": -1149,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 42,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "White Chocolate",
    "backgroundPosX": -357,
    "backgroundPosY": -885,
    "category": 9,
    "priority": 1,
    "quantity": 4,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "White Drop",
    "backgroundPosX": -1237,
    "backgroundPosY": -1237,
    "category": 9,
    "priority": 15,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "White Mor Dhonan Slag",
    "backgroundPosX": -1325,
    "backgroundPosY": -1237,
    "category": 15,
    "priority": 47,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "White Quartz",
    "backgroundPosX": -5,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 18,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Willow Branch",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 10,
    "quantity": 501,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Willow Log",
    "backgroundPosX": -181,
    "backgroundPosY": -1325,
    "category": 7,
    "priority": 6,
    "quantity": 484,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Willow Lumber",
    "backgroundPosX": -269,
    "backgroundPosY": -1325,
    "category": 7,
    "priority": 2,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Willow Plank",
    "backgroundPosX": -357,
    "backgroundPosY": -1325,
    "category": 7,
    "priority": 24,
    "quantity": 17,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wind Archon Egg",
    "backgroundPosX": -445,
    "backgroundPosY": -1325,
    "category": 14,
    "priority": 9,
    "quantity": 2,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wind Materia VI",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 8,
    "priority": 3,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wind Moraine",
    "backgroundPosX": -533,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 8,
    "quantity": 15,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wolf Hide",
    "backgroundPosX": -621,
    "backgroundPosY": -1325,
    "category": 6,
    "priority": 14,
    "quantity": 999,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Wolf Leather",
    "backgroundPosX": -709,
    "backgroundPosY": -1325,
    "category": 6,
    "priority": 2,
    "quantity": 446,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Years-old Pumpkin Cookie",
    "backgroundPosX": -181,
    "backgroundPosY": -357,
    "category": 9,
    "priority": 7,
    "quantity": 47,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow Archon Egg",
    "backgroundPosX": -885,
    "backgroundPosY": -1325,
    "category": 14,
    "priority": 17,
    "quantity": 101,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow Drop",
    "backgroundPosX": -973,
    "backgroundPosY": -1325,
    "category": 9,
    "priority": 17,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow Mor Dhonan Slag",
    "backgroundPosX": -1061,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 45,
    "quantity": 0,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow O'Ghomoro Slag",
    "backgroundPosX": -1149,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 25,
    "quantity": 17,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow Sagolii Slag",
    "backgroundPosX": -1237,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 30,
    "quantity": 3,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yellow Tinolqa Slag",
    "backgroundPosX": -1325,
    "backgroundPosY": -1325,
    "category": 15,
    "priority": 35,
    "quantity": 9,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Yew Plank",
    "backgroundPosX": -1413,
    "backgroundPosY": -5,
    "category": 7,
    "priority": 28,
    "quantity": 12,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Young Indigo Herring",
    "backgroundPosX": -1413,
    "backgroundPosY": -93,
    "category": 13,
    "priority": 2,
    "quantity": 712,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false })
  },
  {
    "name": "Alesone's Songbow",
    "backgroundPosX": -5,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 11,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Aubriest's Allegory",
    "backgroundPosX": -93,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 12,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Aubriest's Whisper",
    "backgroundPosX": -181,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 13,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Blessed Earrings",
    "backgroundPosX": -269,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 40,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Blessed Ring",
    "backgroundPosX": -357,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 41,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Chiran Zabran's Tempest",
    "backgroundPosX": -445,
    "backgroundPosY": -5,
    "category": 4,
    "priority": 14,
    "quantity": 14,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Bandana",
    "backgroundPosX": -93,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 20,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Belt",
    "backgroundPosX": -181,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 24,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Breeches",
    "backgroundPosX": -269,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 25,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Calot",
    "backgroundPosX": -357,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 21,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Choker",
    "backgroundPosX": -445,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 43,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Earrings",
    "backgroundPosX": -5,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 42,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Moccasins",
    "backgroundPosX": -93,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 26,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Ring",
    "backgroundPosX": -181,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 44,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Sabatons",
    "backgroundPosX": -269,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 27,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Tabard",
    "backgroundPosX": -357,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 22,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Explorer's Tunic",
    "backgroundPosX": -445,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 23,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Gerbald's Redspike",
    "backgroundPosX": -93,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 15,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Chausses",
    "backgroundPosX": -269,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 31,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Choker",
    "backgroundPosX": -357,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 46,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Earrings",
    "backgroundPosX": -445,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 45,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Halfgloves",
    "backgroundPosX": -5,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 29,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Halfrobe",
    "backgroundPosX": -93,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 28,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Pattens",
    "backgroundPosX": -181,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 32,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Ring",
    "backgroundPosX": -269,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 47,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Mage's Rope Belt",
    "backgroundPosX": -357,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 30,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Red Onion Helm",
    "backgroundPosX": -445,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 33,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Scarlet Sash",
    "backgroundPosX": -5,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 35,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Sibold's Reach",
    "backgroundPosX": -93,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 16,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Spiked Armguards",
    "backgroundPosX": -181,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 34,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Stonewall Choker",
    "backgroundPosX": -269,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 49,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Stonewall Earrings",
    "backgroundPosX": -357,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 48,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Stonewall Ring",
    "backgroundPosX": -445,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 50,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Symon's Honeyclaws",
    "backgroundPosX": -533,
    "backgroundPosY": -93,
    "category": 4,
    "priority": 17,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Thormoen's Pride",
    "backgroundPosX": -533,
    "backgroundPosY": -181,
    "category": 4,
    "priority": 18,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Thormoen's Purpose",
    "backgroundPosX": -533,
    "backgroundPosY": -269,
    "category": 4,
    "priority": 19,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Thormoen's Subligar",
    "backgroundPosX": -533,
    "backgroundPosY": -357,
    "category": 4,
    "priority": 36,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Veteran's Acton",
    "backgroundPosX": -533,
    "backgroundPosY": -445,
    "category": 4,
    "priority": 38,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Veteran's Field Belt",
    "backgroundPosX": -5,
    "backgroundPosY": -533,
    "category": 4,
    "priority": 39,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  },
  {
    "name": "Veteran's Pot Helm",
    "backgroundPosX": -93,
    "backgroundPosY": -533,
    "category": 4,
    "priority": 37,
    "quantity": 1,
    "isOwned": (function (a) { return this.quantity > 0 ? true : false }),
    "secondSheet": true
  }
];