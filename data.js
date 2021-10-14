const imageData = [
    "wheat.png",
    "skull.png",
    "upgrade.png",
    "boat.png",
    "horse.png",
    "boat-clicked.png",
    "banana.png",
    "icon-banana.png",
    "icon-horse.png",
    "coffee.png",
    "icon-coffee.png",
]

const soundData = [
    "click.mp3",
    "click2.mp3",
    "page-flip.mp3",
    "drop.mp3",
    "music.mp3"
]

const upgradeData = [
    {
        "name": "Stronger Saddles",
        "type": "horse",
        "tier": 1,
        "description": "Special threads made of flax coated in beeswax make for stronger saddles"
    }
    // {
    //     "name": "Cardboard Sticks",
    //     "type": "stick",
    //     "tier": 1,
    //     "description": "Cardboard popsicle sticks allow for easier manufacturing."
    // },
    // {
    //     "name": "Wooden Sticks",
    //     "type": "stick",
    //     "tier": 2,
    //     "description": "Sturdy and reliable."
    // },
    // {
    //     "name": "Plastic Sticks",
    //     "type": "stick",
    //     "tier": 3,
    //     "description": "Plastic popsicle sticks (Warning: not liable for environmental damage)"
    // },
    // {
    //     "name": "Big Bucket",
    //     "type": "bucket",
    //     "tier": 1,
    //     "description": "More space in the bucket, more droplets to be held!"
    // },
    // {
    //     "name": "Bigger Bucket",
    //     "type": "bucket",
    //     "tier": 2,
    //     "description": "Even more space in the bucket, even more droplets to be held!"
    // },
    // {
    //     "name": "Biggest Bucket",
    //     "type": "bucket",
    //     "tier": 3,
    //     "description": "The most space in the bucket, the most droplets to be held!"
    // },
    // {
    //     "name": "Droplet Collectors",
    //     "type": "collector",
    //     "tier": 1,
    //     "description": "Little ants pick up bonus popsicles for you!"
    // },
    // {
    //     "name": "Fire Ants",
    //     "type": "collector",
    //     "tier": 2,
    //     "description": "Probably shouldn't eat those."
    // },
    // {
    //     "name": "Wasps",
    //     "type": "collector",
    //     "tier": 3,
    //     "description": "Okay. Do NOT eat the wasp popsicles."
    // }
]

const newsData = [
    "Before the Columbian Exchange, the old world had never even seen a tomato!",
    "Old world animals expanded the food supply in the new world.",
    "Horses vastly changed the lifestyle of many Native American tribes.",
    "Many Native American tribes were wiped out due to the Columbian Exchange.",
    "Smallpox epidemics in the new world were more deadly than the Black Death!",
    "The Columbian Exchange led to a huge increase in population in the old world.",
    "New world crops have become hugely popular in the old world.",
    "Ireland became so reliant on potatoes from the new world that it eventually led to the great potato famine!",
    "The Columbian Exchange led to the horrors of the Atlantic Slave Trade.",
    "The Columbian Exchange has led to the extinction of many species."
]

const buildingsData = [
    {
        "name": "Horse",
        "baseCost": 5,
        "baseProduction": 1,
        "description": "Horses allowed native americans easier travel to find food and other supplies."
    },
    {
        "name": "Banana",
        "baseCost": 25,
        "baseProduction": 5,
        "description": "Mostly imported from Belize, bananas flourished after reaching the new world."
    },
    {
        "name": "Coffee",
        "baseCost": 125,
        "baseProduction": 25,
        "description": "Coffee originated in tropical Africa, eventually reaching the New World."
    }
]

const boostsData = {
    'loseFood': {
        'name': 'Oh No! Smallpox',
        'description': 'Smallpox has broken out among your colonists! Losing money!'
    }
}
