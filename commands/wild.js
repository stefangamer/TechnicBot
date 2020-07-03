const talkedRecently = new Set();
const Discord = require("discord.js");
module.exports.run = async (bot, message, args, db) => {
    if (talkedRecently.has(message.author.id)) {
        message.reply("Please wait 1 minute before catching again!");
    } else {
        let oldcoll = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function (doc) {
            return doc.data().coll
        })
        let newcoll = oldcoll + 1
        db.collection('pokemon').doc(message.author.id.toString()).update({
            coll: newcoll
        });
       let prefix = await db.collection('guilds').doc(message.guild.id.toString()).get().then(function (doc) {
            return doc.data().prefix
        })
let legend = Math.floor(Math.random() * 1001)
        var items = [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
            "Charmander",
            "Charmeleon",
            "Charizard",
            "Squirtle",
            "Wartortle",
            "Blastoise",
            "Caterpie",
            "Metapod",
            "Butterfree",
            "Weedle",
            "Kakuna",
            "Beedrill",
            "Pidgey",
            "Pidgeotto",
            "Pidgeot",
            "Rattata",
            "Raticate",
            "Spearow",
            "Fearow",
            "Ekans",
            "Arbok",
            "Pikachu",
            "Raichu",
            "Sandshrew",
            "Sandslash",
            "NidoranF",
            "Nidorina",
            "Nidoqueen",
            "NidoranM",
            "Nidorino",
            "Nidoking",
            "Clefairy",
            "Clefable",
            "Vulpix",
            "Ninetales",
            "Jigglypuff",
            "Wigglytuff",
            "Zubat",
            "Golbat",
            "Oddish",
            "Gloom",
            "Vileplume",
            "Paras",
            "Parasect",
            "Venonat",
            "Venomoth",
            "Diglett",
            "Dugtrio",
            "Meowth",
            "Persian",
            "Psyduck",
            "Golduck",
            "Mankey",
            "Primeape",
            "Growlithe",
            "Arcanine",
            "Poliwag",
            "Poliwhirl",
            "Poliwrath",
            "Abra",
            "Kadabra",
            "Alakazam",
            "Machop",
            "Machoke",
            "Machamp",
            "Bellsprout",
            "Weepinbell",
            "Victreebel",
            "Tentacool",
            "Tentacruel",
            "Geodude",
            "Graveler",
            "Golem",
            "Ponyta",
            "Rapidash",
            "Slowpoke",
            "Slowbro",
            "Magnemite",
            "Magneton",
            "Farfetch’d",
            "Doduo",
            "Dodrio",
            "Seel",
            "Dewgong",
            "Grimer",
            "Muk",
            "Shellder",
            "Cloyster",
            "Gastly",
            "Haunter",
            "Gengar",
            "Onix",
            "Drowzee",
            "Hypno",
            "Krabby",
            "Kingler",
            "Voltorb",
            "Electrode",
            "Exeggcute",
            "Exeggutor",
            "Cubone",
            "Marowak",
            "Hitmonlee",
            "Hitmonchan",
            "Lickitung",
            "Koffing",
            "Weezing",
            "Rhyhorn",
            "Rhydon",
            "Chansey",
            "Tangela",
            "Kangaskhan",
            "Horsea",
            "Seadra",
            "Goldeen",
            "Seaking",
            "Staryu",
            "Starmie",
            "Mr. Mime",
            "Scyther",
            "Jynx",
            "Electabuzz",
            "Magmar",
            "Pinsir",
            "Tauros",
            "Magikarp",
            "Gyarados",
            "Lapras",
            "Ditto",
            "Eevee",
            "Vaporeon",
            "Jolteon",
            "Flareon",
            "Porygon",
            "Omanyte",
            "Omastar",
            "Kabuto",
            "Kabutops",
            "Aerodactyl",
            "Snorlax",
            "Dratini",
            "Dragonair",
            "Dragonite",
            "Chikorita",
            "Bayleef",
            "Meganium",
            "Cyndaquil",
            "Quilava",
            "Typhlosion",
            "Totodile",
            "Croconaw",
            "Feraligatr",
            "Sentret",
            "Furret",
            "Hoothoot",
            "Noctowl",
            "Ledyba",
            "Ledian",
            "Spinarak",
            "Ariados",
            "Crobat",
            "Chinchou",
            "Lanturn",
            "Pichu",
            "Cleffa",
            "Igglybuff",
            "Togepi",
            "Togetic",
            "Natu",
            "Xatu",
            "Mareep",
            "Flaaffy",
            "Ampharos",
            "Bellossom",
            "Marill",
            "Azumarill",
            "Sudowoodo",
            "Politoed",
            "Hoppip",
            "Skiploom",
            "Jumpluff",
            "Aipom",
            "Sunkern",
            "Sunflora",
            "Yanma",
            "Wooper",
            "Quagsire",
            "Espeon",
            "Umbreon",
            "Murkrow",
            "Slowking",
            "Misdreavus",
            "Unown",
            "Wobbuffet",
            "Girafarig",
            "Pineco",
            "Forretress",
            "Dunsparce",
            "Gligar",
            "Steelix",
            "Snubbull",
            "Granbull",
            "Qwilfish",
            "Scizor",
            "Shuckle",
            "Heracross",
            "Sneasel",
            "Teddiursa",
            "Ursaring",
            "Slugma",
            "Magcargo",
            "Swinub",
            "Piloswine",
            "Corsola",
            "Remoraid",
            "Octillery",
            "Delibird",
            "Mantine",
            "Skarmory",
            "Houndour",
            "Houndoom",
            "Kingdra",
            "Phanpy",
            "Donphan",
            "Porygon2",
            "Stantler",
            "Smeargle",
            "Tyrogue",
            "Hitmontop",
            "Smoochum",
            "Elekid",
            "Magby",
            "Miltank",
            "Blissey",
            "Larvitar",
            "Pupitar",
            "Tyranitar",
            "Treecko",
            "Grovyle",
            "Sceptile",
            "Torchic",
            "Combusken",
            "Blaziken",
            "Mudkip",
            "Marshtomp",
            "Swampert",
            "Poochyena",
            "Mightyena",
            "Zigzagoon",
            "Linoone",
            "Wurmple",
            "Silcoon",
            "Beautifly",
            "Cascoon",
            "Dustox",
            "Lotad",
            "Lombre",
            "Ludicolo",
            "Seedot",
            "Nuzleaf",
            "Shiftry",
            "Taillow",
            "Swellow",
            "Wingull",
            "Pelipper",
            "Ralts",
            "Kirlia",
            "Gardevoir",
            "Surskit",
            "Masquerain",
            "Shroomish",
            "Breloom",
            "Slakoth",
            "Vigoroth",
            "Slaking",
            "Nincada",
            "Ninjask",
            "Shedinja",
            "Whismur",
            "Loudred",
            "Exploud",
            "Makuhita",
            "Hariyama",
            "Azurill",
            "Nosepass",
            "Skitty",
            "Delcatty",
            "Sableye",
            "Mawile",
            "Aron",
            "Lairon",
            "Aggron",
            "Meditite",
            "Medicham",
            "Electrike",
            "Manectric",
            "Plusle",
            "Minun",
            "Volbeat",
            "Illumise",
            "Roselia",
            "Gulpin",
            "Swalot",
            "Carvanha",
            "Sharpedo",
            "Wailmer",
            "Wailord",
            "Numel",
            "Camerupt",
            "Torkoal",
            "Spoink",
            "Grumpig",
            "Spinda",
            "Trapinch",
            "Vibrava",
            "Flygon",
            "Cacnea",
            "Cacturne",
            "Swablu",
            "Altaria",
            "Zangoose",
            "Seviper",
            "Lunatone",
            "Solrock",
            "Barboach",
            "Whiscash",
            "Corphish",
            "Crawdaunt",
            "Baltoy",
            "Claydol",
            "Lileep",
            "Cradily",
            "Anorith",
            "Armaldo",
            "Feebas",
            "Milotic",
            "Castform",
            "Kecleon",
            "Shuppet",
            "Banette",
            "Duskull",
            "Dusclops",
            "Tropius",
            "Chimecho",
            "Absol",
            "Wynaut",
            "Snorunt",
            "Glalie",
            "Spheal",
            "Sealeo",
            "Walrein",
            "Clamperl",
            "Huntail",
            "Gorebyss",
            "Relicanth",
            "Luvdisc",
            "Bagon",
            "Shelgon",
            "Salamence",
            "Beldum",
            "Metang",
            "Metagross",
            "Turtwig",
            "Grotle",
            "Torterra",
            "Chimchar",
            "Monferno",
            "Infernape",
            "Piplup",
            "Prinplup",
            "Empoleon",
            "Starly",
            "Staravia",
            "Staraptor",
            "Bidoof",
            "Bibarel",
            "Kricketot",
            "Kricketune",
            "Shinx",
            "Luxio",
            "Luxray",
            "Budew",
            "Roserade",
            "Cranidos",
            "Rampardos",
            "Shieldon",
            "Bastiodon",
            "Burmy",
            "Wormadam",
            "Mothim",
            "Combee",
            "Vespiquen",
            "Pachirisu",
            "Buizel",
            "Floatzel",
            "Cherubi",
            "Cherrim",
            "Shellos",
            "Gastrodon",
            "Ambipom",
            "Drifloon",
            "Drifblim",
            "Buneary",
            "Lopunny",
            "Mismagius",
            "Honchkrow",
            "Glameow",
            "Purugly",
            "Chingling",
            "Stunky",
            "Skuntank",
            "Bronzor",
            "Bronzong",
            "Bonsly",
            "Mime Jr.",
            "Happiny",
            "Chatot",
            "Spiritomb",
            "Gible",
            "Gabite",
            "Garchomp",
            "Munchlax",
            "Riolu",
            "Lucario",
            "Hippopotas",
            "Hippowdon",
            "Skorupi",
            "Drapion",
            "Croagunk",
            "Toxicroak",
            "Carnivine",
            "Finneon",
            "Lumineon",
            "Mantyke",
            "Snover",
            "Abomasnow",
            "Weavile",
            "Magnezone",
            "Lickilicky",
            "Rhyperior",
            "Tangrowth",
            "Electivire",
            "Magmortar",
            "Togekiss",
            "Yanmega",
            "Leafeon",
            "Glaceon",
            "Gliscor",
            "Mamoswine",
            "Porygon-Z",
            "Gallade",
            "Probopass",
            "Dusknoir",
            "Froslass",
            "Rotom",
            "Snivy",
            "Servine",
            "Serperior",
            "Tepig",
            "Pignite",
            "Emboar",
            "Oshawott",
            "Dewott",
            "Samurott",
            "Patrat",
            "Watchog",
            "Lillipup",
            "Herdier",
            "Stoutland",
            "Purrloin",
            "Liepard",
            "Pansage",
            "Simisage",
            "Pansear",
            "Simisear",
            "Panpour",
            "Simipour",
            "Munna",
            "Musharna",
            "Pidove",
            "Tranquill",
            "Unfezant",
            "Blitzle",
            "Zebstrika",
            "Roggenrola",
            "Boldore",
            "Gigalith",
            "Woobat",
            "Swoobat",
            "Drilbur",
            "Excadrill",
            "Audino",
            "Timburr",
            "Gurdurr",
            "Conkeldurr",
            "Tympole",
            "Palpitoad",
            "Seismitoad",
            "Throh",
            "Sawk",
            "Sewaddle",
            "Swadloon",
            "Leavanny",
            "Venipede",
            "Whirlipede",
            "Scolipede",
            "Cottonee",
            "Whimsicott",
            "Petilil",
            "Lilligant",
            "Basculin",
            "Sandile",
            "Krokorok",
            "Krookodile",
            "Darumaka",
            "Darmanitan",
            "Maractus",
            "Dwebble",
            "Crustle",
            "Scraggy",
            "Scrafty",
            "Sigilyph",
            "Yamask",
            "Cofagrigus",
            "Tirtouga",
            "Carracosta",
            "Archen",
            "Archeops",
            "Trubbish",
            "Garbodor",
            "Zorua",
            "Zoroark",
            "Minccino",
            "Cinccino",
            "Gothita",
            "Gothorita",
            "Gothitelle",
            "Solosis",
            "Duosion",
            "Reuniclus",
            "Ducklett",
            "Swanna",
            "Vanillite",
            "Vanillish",
            "Vanilluxe",
            "Deerling",
            "Sawsbuck",
            "Emolga",
            "Karrablast",
            "Escavalier",
            "Foongus",
            "Amoonguss",
            "Frillish",
            "Jellicent",
            "Alomomola",
            "Joltik",
            "Galvantula",
            "Ferroseed",
            "Ferrothorn",
            "Klink",
            "Klang",
            "Klinklang",
            "Tynamo",
            "Eelektrik",
            "Eelektross",
            "Elgyem",
            "Beheeyem",
            "Litwick",
            "Lampent",
            "Chandelure",
            "Axew",
            "Fraxure",
            "Haxorus",
            "Cubchoo",
            "Beartic",
            "Cryogonal",
            "Shelmet",
            "Accelgor",
            "Stunfisk",
            "Mienfoo",
            "Mienshao",
            "Druddigon",
            "Golett",
            "Golurk",
            "Pawniard",
            "Bisharp",
            "Bouffalant",
            "Rufflet",
            "Braviary",
            "Vullaby",
            "Mandibuzz",
            "Heatmor",
            "Durant",
            "Deino",
            "Zweilous",
            "Hydreigon",
            "Larvesta",
            "Volcarona",
            "Chespin",
            "Quilladin",
            "Chesnaught",
            "Fennekin",
            "Braixen",
            "Delphox",
            "Froakie",
            "Frogadier",
            "Greninja",
            "Bunnelby",
            "Diggersby",
            "Fletchling",
            "Fletchinder",
            "Talonflame",
            "Scatterbug",
            "Spewpa",
            "Vivillon",
            "Litleo",
            "Pyroar",
            "Flabebe",
            "Floette",
            "Florges",
            "Skiddo",
            "Gogoat",
            "Pancham",
            "Pangoro",
            "Furfrou",
            "Espurr",
            "Meowstic",
            "Honedge",
            "Doublade",
            "Aegislash",
            "Spritzee",
            "Aromatisse",
            "Swirlix",
            "Slurpuff",
            "Inkay",
            "Malamar",
            "Binacle",
            "Barbaracle",
            "Skrelp",
            "Dragalge",
            "Clauncher",
            "Clawitzer",
            "Helioptile",
            "Heliolisk",
            "Tyrunt",
            "Tyrantrum",
            "Amaura",
            "Aurorus",
            "Sylveon",
            "Hawlucha",
            "Dedenne",
            "Carbink",
            "Goomy",
            "Sliggoo",
            "Goodra",
            "Klefki",
            "Phantump",
            "Trevenant",
            "Pumpkaboo",
            "Gourgeist",
            "Bergmite",
            "Avalugg",
            "Noibat",
            "Noivern",
            "Rowlet",
            "Dartrix",
            "Decidueye",
            "Litten",
            "Torracat",
            "Incineroar",
            "Popplio",
            "Brionne",
            "Primarina",
            "Pikipek",
            "Trumbeak",
            "Toucannon",
            "Yungoos",
            "Gumshoos",
            "Grubbin",
            "Charjabug",
            "Vikavolt",
            "Crabrawler",
            "Crabominable",
            "Oricorio",
            "Cutiefly",
            "Ribombee",
            "Rockruff",
            "Lycanroc",
            "Wishiwashi",
            "Mareanie",
            "Toxapex",
            "Mudbray",
            "Mudsdale",
            "Dewpider",
            "Araquanid",
            "Fomantis",
            "Lurantis",
            "Morelull",
            "Shiinotic",
            "Salandit",
            "Salazzle",
            "Stufful",
            "Bewear",
            "Bounsweet",
            "Steenee",
            "Tsareena",
            "Comfey",
            "Oranguru",
            "Passimian",
            "Wimpod",
            "Golisopod",
            "Sandygast",
            "Palossand",
            "Pyukumuku",
            "Type: Null",
            "Silvally",
            "Minior",
            "Komala",
            "Turtonator",
            "Togedemaru",
            "Mimikyu",
            "Bruxish",
            "Drampa",
            "Dhelmise",
            "Jangmo-o",
            "Hakamo-o",
            "Kommo-o",
        ]
var legends = [
"Articuno",
"Zapdos",
"Moltres",
"Mewtwo",
"Mew",
"Raikou",
"Entei",
"Suicune",
"Lugia",
"Ho-Oh",
"Celebi",
  "Regirock",
            "Regice",
            "Registeel",
            "Latias",
            "Latios",
            "Kyogre",
            "Groudon",
            "Rayquaza",
            "Jirachi",
            "Deoxys",
"Uxie",
            "Mesprit",
            "Azelf",
            "Dialga",
            "Palkia",
            "Heatran",
            "Regigigas",
            "Giratina",
            "Cresselia",
            "Phione",
            "Manaphy",
            "Darkrai",
            "Shaymin",
            "Arceus",
            "Victini",
			 "Cobalion",
            "Terrakion",
            "Virizion",
            "Tornadus",
            "Thundurus",
            "Reshiram",
            "Zekrom",
            "Landorus",
            "Kyurem",
            "Keldeo",
            "Meloetta",
            "Genesect",
			"Xerneas",
            "Yveltal",
            "Zygarde",
            "Diancie",
            "Hoopa",
            "Volcanion",
			"Tapu Koko",
            "Tapu Lele",
            "Tapu Bulu",
            "Tapu Fini",
            "Cosmog",
            "Cosmoem",
            "Solgaleo",
            "Lunala",
            "Nihilego",
            "Buzzwole",
            "Pheromosa",
            "Xurkitree",
            "Celesteela",
            "Kartana",
            "Guzzlord",
            "Necrozma",
            "Magearna",
            "Marshadow",
            "Poipole",
            "Naganadel",
            "Stakataka",
            "Blacephalon",
            "Zeraora",
            "Meltan",
            "Melmetal"
]
let dexno2
let caughtmon
if (legend < 10) {
         dexno2 = Math.floor(Math.random() * legends.length)
		 caughtmon = legends[dexno2]
} else {
         dexno2 = Math.floor(Math.random() * items.length)
		 caughtmon = items[dexno2]
}
        
		var caughtmon2 = caughtmon
        let level = Math.floor(Math.random() * 61)
        let HP = Math.floor(Math.random() * 32)
        let Attack = Math.floor(Math.random() * 32)
        let Defense = Math.floor(Math.random() * 32)
        let SpA = Math.floor(Math.random() * 32)
        let SpD = Math.floor(Math.random() * 32)
        let Speed = Math.floor(Math.random() * 32)
		let Shiny = Math.floor(Math.random() * 2)
        var dexno = dexno2 + 1
		var caughtmon3 = caughtmon2
let derp
if (Shiny == 1) {
derp = ("http://play.pokemonshowdown.com/sprites/ani-shiny/" + `${caughtmon2.toLowerCase()}` + ".gif")
caughtmon3 = "✨ " + caughtmon2 + " ✨"
} else {
 derp = ("http://play.pokemonshowdown.com/sprites/xyani/" + `${caughtmon2.toLowerCase()}` + ".gif")
}
const embed = new Discord.RichEmbed()
.setTitle(`${message.member.user.username}'s catch [ID: ${newcoll}]`)
.addField(`${caughtmon3}!`, ".")
.addField("Level:", `${level}`)
.setImage(derp)
.setFooter(`To view this pokémon's stats use ${prefix}stats ${newcoll}`)
message.channel.send(embed)
        db.collection('pokemon').doc(message.author.id.toString()).update({
            [newcoll]: [caughtmon2, level, dexno, HP, Attack, Defense, SpA, SpD, Speed, Shiny]
        })
        let name = await db.collection('names').doc(message.author.id.toString()).get().then(function (doc) {
            console.log(doc.data())
            return doc.data()[caughtmon2]
        })
        if (!name) {
            db.collection('names').doc(message.author.id.toString()).update({
                [caughtmon2]: [newcoll, level, dexno, HP, Attack, Defense, SpA, SpD, Speed, Shiny]
            })
        } else {
            let OldID = await db.collection('names').doc(message.author.id.toString()).get().then(function (doc) {
                console.log(doc.data())
                return doc.data()[caughtmon][0]
            })
            var index1 = OldID.toString();
            var index2 = newcoll.toString();
            var newindex2 = ", " + index2
            var res = index1.concat(newindex2);
            db.collection('names').doc(message.author.id.toString()).update({
                [caughtmon2]: [res, level, dexno, HP, Attack, Defense, SpA, SpD, Speed, Shiny]
            })
        }
 talkedRecently.add(message.author.id);
    setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
    }, 6000);
    }
}

module.exports.help = {
    name: "wild"
}