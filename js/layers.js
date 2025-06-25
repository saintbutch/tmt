addLayer("layer_mana", {
    name: "mana", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "✧", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A149EF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "mana", // Name of prestige currency
    baseResource: "thaums", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('layer_mana', 1e)) gain = gain.times(1.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "M", description: "M: Condense raw Thaums into usable Mana.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
	    11: {
		    title: "Droplet of Mana",
		    description: "Sure, it's 'not safe' and 'boneheadedly foolish' to consume processed mana, but how else are you supposed to generate raw Thaums?",
		    cost: new Decimal(1),
	    },
        12: {
            title: "Basic Thaumonomics",
            description: "Mana naturally breaks down into Thaums. The more you consume, the more you'll attract raw energy.",
            cost: new Decimal(2),
        },
        13: {
            title: "Recursive Condensation",
            description: "Like attracts like. Channeling Mana into more Mana must improve the overall rate.",
            cost: new Decimal(10)
        }

        }
		    

    }
})
