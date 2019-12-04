'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
	    "arme" : {
	        "poing" : {
                "name" : "poing",
                "texte" : "poing-texte",
                "degats" : [0, 0],
                "sound" : "punch",
                "anim" : "poing",
                "price" : 0
            },
            "baton" : {
                "name" : "baton",
                "texte" : "baton-texte",
                "degats" : [1, 1],
                "sound" : "baton",
                "anim" : "baton",
                "price" : 50
            },
            "dague" : {
                "name" : "dague",
                "texte" : "dague-texte",
                "degats" : [1, 2],
                "sound" : "dagguer",
                "anim" : "dague",
                "price" : 100
            },
            "epee" : {
                "name" : "epee",
                "texte" : "epee-texte",
                "degats" : [1, 3],
                "sound" : "sword",
                "anim" : "epee",
                "price" : 200
            },
            "crocRoi" : {
                "name" : "crocRoi",
                "texte" : "crocRoi-texte",
                "degats" : [1, 2],
                "lifeSteal" : [10, 30],
                "sound" : "croc",
                "anim" : "croc",
                "price" : 0
            }
	    },
	    "bouclier" : {
	        "bras" : {
                "name" : "bras",
                "texte" : "bras-texte",
                "defense" : [0, 0],
                "sound" : "block",
                "anim" : null,
                "price" : 0
            },
            "bouclierBois" : {
                "name" : "bouclierBois",
                "texte" : "bouclierBois-texte",
                "defense" : [0, 1],
                "sound" : "woodblock",
                "anim" : null,
                "price" : 100
            },
            "bouclierFer" : {
                "name" : "bouclierFer",
                "texte" : "bouclierFer-texte",
                "defense" : [0, 2],
                "sound" : "ironblock",
                "anim" : null,
                "price" : 200
            }
	    },
	    "conso" : {
	        "potionSante" : {
                "name" : "potionSante",
                "texte" : "potionSante-texte",
                "vie" : [100, 100],
                "sound" : "drink",
                "anim" : null,
                "price" : 100,
                "offensif" : false
            },
            "potionMana" : {
                "name" : "potionMana",
                "texte" : "potionMana-texte",
                "mana" : [100, 100],
                "sound" : "drink",
                "anim" : null,
                "price" : 100,
                "offensif" : false
            },
            "fromage" : {
                "name" : "fromage",
                "texte" : "fromage-texte",
                "vie" : [20, 30],
                "effet" : ["satiete"],
                "sound" : "eat",
                "anim" : null,
                "price" : 50,
                "offensif" : false
            },
            "pomme" : {
                "name" : "pomme",
                "texte" : "pomme-texte",
                "vie" : [10, 20],
                "effet" : ["satiete"],
                "sound" : "eat",
                "anim" : null,
                "price" : 30,
                "offensif" : false
            },
            "venin" : {
                "name" : "venin",
                "texte" : "venin-texte",
                "degats" : [1, 3],
                "effet" : ["poison"],
                "sound" : "acide",
                "anim" : "venin",
                "multicible" : true,
                "price" : 100,
                "offensif" : true
            },
            "elixir" : {
                "name" : "elixir",
                "texte" : "elixir-texte",
                "vie" : [100, 100],
                "mana" : [100, 100],
                "sound" : "drink",
                "anim" : null,
                "price" : 300,
                "offensif" : false
            }
	    },
	    "magie" : {
	        "bouleFeu" : {
                "name" : "bouleFeu",
                "texte" : "bouleFeu-texte",
                "degats" : [3, 5],
                "effet" : ["brulure"],
                "manaCost" : 1,
                "sound" : "bouleFeu",
                "anim" : "bouleFeu",
                "price" : 200,
                "offensif" : true,
                "element" : "feu"
            },
            "soin" : {
                "name" : "soin",
                "texte" : "soin-texte",
                "vie" : [20, 40],
                "manaCost" : 1,
                "sound" : "soin",
                "anim" : null,
                "price" : 300,
                "offensif" : false
            },
            "morsure" : {
                "name" : "morsure",
                "texte" : "morsure-texte",
                "degats" : [1, 2],
                "lifeSteal" : [30, 50],
                "effet" : ["poison"],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "element" : "poison"
            },
            "araneisme" : {
                "name" : "araneisme",
                "texte" : "araneisme-texte",
                "degats" : [3, 5],
                "lifeSteal" : [30, 50],
                "effet" : ["poison-2"],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "element" : "poison"
            },
            "voler" : {
                "name" : "voler",
                "texte" : "voler-texte",
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "action" : function(me, cible) {
                    var steal = Utils.rand(10 * (me.level+1), 20 * (me.level+1));

                    // Si c'est le monstre, il nous vole et recupere une partie
                    if (me.isMonster) me.steal("gold", cible, steal, 0);
                    // Si c'est nous, le monstre ne perd rien
                    else me.addGold(steal);
                },
                "element" : "gold"
            },
            "doubleAttaque" : {
                "name" : "doubleAttaque",
                "texte" : "doubleAttaque-texte",
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "action" : function(me, cible) {
                    me.attaque(cible, true);
                    me.attaque(cible, true);
                }
            },
            "volDeVie" : {
                "name" : "volDeVie",
                "texte" : "volDeVie-texte",
                "lifeSteal" : [5, 30],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true
            },
            "volDeMana" : {
                "name" : "volDeMana",
                "texte" : "volDeMana-texte",
                "manaSteal" : [10, 30],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true
            },
            "taillade" : {
                "name" : "taillade",
                "texte" : "taillade-texte",
                "degats" : [2, 5],
                "effet" : ["saignement"],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true
            },
            "pondreAraignee" : {
                "name" : "pondreAraignee",
                "texte" : "pondreAraignee-texte",
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "contrainte" : function(me, cible, fightView) {
                    return fightView.aliveMonsters().length < 3;
                },
                "action" : function(me, cible, fightView) {
                    fightView.addMonstre("araignee", 3);
                }
            },
            "invoqueGoule" : {
                "name" : "invoqueGoule",
                "texte" : "invoqueGoule-texte",
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "action" : function(me, cible, fightView) {
                    fightView.addMonstre("goule", 3);
                }
            },
            "invoqueGrosseGoule" : {
                "name" : "invoqueGrosseGoule",
                "texte" : "invoqueGrosseGoule-texte",
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true,
                "action" : function(me, cible, fightView) {
                    fightView.addMonstre("grosseGoule", 3);
                }
            },

            "cannibalisme" : {
                "name" : "cannibalisme",
                "texte" : "cannibalisme-texte",
                "degats" : [3, 5],
                "lifeSteal" : [50, 100],
                "manaCost" : 1,
                "sound" : null,
                "anim" : null,
                "price" : null,
                "offensif" : true
            }
	    },
	    "clef" : {
	        "bougie" : {
                "name" : "bougie",
                "texte" : "bougie-texte"
            },
            "clefS2" : {
                "name" : "clefS2",
                "texte" : "clefS2-texte"
            }
	    },
	    "ifObj" : [
	        "helpRoi", "helpRoi2", "necroS1Clean", "hadClef", "S1ViaS0", "S3ViaS0", "viaS1", "viaS3",
	        "parchoLu", "fouilleCercueil", "torcheAllumeG", "torcheExploseG", "torcheAllumeD", "torcheExploseD",
	        "S2Ouvert", "S2Clean", "S4Clean", "S5Clean"
        ]
	};
	
	return {
		get : function(param1, param2) {
		    if (!param2) return this.getAll(param1);
		    else return this.getByType(param1, param2);
		},

		getAll : function(key) {
		    var item = this.getByType("arme", key);

		    if (!item) item = this.getByType("bouclier", key);
		    if (!item) item = this.getByType("conso", key);
		    if (!item) item = this.getByType("magie", key);
		    if (!item) item = this.getByType("clef", key);
		    // Sinon, IfObj
		    if (!item) item = key;

		    return item;
		},

		getByType : function(type, key) {
		    var items = data[type];
		    var item = null;
		    if (items && items[key]) {
		        item = Utils.clone(items[key]);
		        if (type != "ifObj") item.type = type;
		    }
		    return item;
		},

        /**
        * Liste pour l'affichage
        **/
		list : function(letter, Textes) {
		    var resultats = this.listByType("arme", letter, Textes);
		    resultats = resultats.concat(this.listByType("bouclier", letter, Textes))
		    resultats = resultats.concat(this.listByType("conso", letter, Textes))
		    resultats = resultats.concat(this.listByType("magie", letter, Textes))
		    return resultats;
		},
		listByType : function(type, letter, Textes) {
		    var resultats = [];
		    for (var item in data[type]) {
		        var itemName = Utils.normalize(Textes.get(item));
		        if(itemName.startsWith(letter)) resultats.push(item);
		    }
		    return resultats;
		}
	};
});