import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {
            emotions: [
                'Embarassed',
                'Angry',
                'Timid, Bashful',
                'Giggling, Smiling',
                'Squinting, Winking',
                'Bored',
                'Stressed, Fatigued',
                'Fearful',
                'Thoughtful, Meditiating',
                'Deadpan',
                'Insane, Berserker',
                'Insane, Happy',
                'Pining, Furrowed',
                'Laughing, Hysterical',
                'Attentive, Shocked',
                'Stern, Grumpy',
                'Clenched Teeth',
                'Gape, Gawk',
                'Relieved',
                'Sneering',
                'Paranoid, Shifty',
                'Blissful, Joyful',
                'Confused'
            ],
            animals: {
                sea: [
                    'Mollusk',
                    'Crab, Lobster',
                    'Squid, Mudskipper',
                    'Fish - Deep Sea',
                    'Jellyfish, Octopus',
                    'Fish - Fresh Water',
                    'Whale, Dolphin',
                    'Shell',
                    'Eel, Leech',
                    'Coral, Anemone',
                    'Shark, Ray'
                ],
                insect: [
                    'Worm',
                    'Ant',
                    'Mosquito',
                    'Moth, Butterfly',
                    'Fly, Dragonfly',
                    'Lotus, Mantis',
                    'Bee, Wasp',
                    'Caterpillar',
                    'Beetle, Scarab',
                    'Flea, Mite',
                    'Spider'
                ],
                mammal: [
                    'Sheep, Cow',
                    'Mouse, Rabbit',
                    'Pig, Boar',
                    'Deer, Pronghorn',
                    'Ram, Bull, Buck',
                    'Elephant, Giraffe'
                ],
                reptile: [
                    'Crocodile, Gila',
                    'Frog, Newt',
                    'Lizard, Snake',
                    'Turtle'
                ],
                bird: [
                    'Wild Fowl, Duck',
                    'Farm Fowl, Rooster',
                    'Seabird, Penguin',
                    'City - Raven, Sparrow',
                    'Tropical - Parrot, Heron',
                    'Bird of Prey - Hawk, Owl'
                ],
                mammal2: [
                    'Bat',
                    'Bear',
                    'Lupine - Wild Dog',
                    'Horse, Zebra',
                    'Feline - Wild Cat',
                    'Primate'
                ]
            },
            veggie: {
                plant: [
                    'Seaweed',
                    'Fern',
                    'Desert, Cacti',
                    'Thick Leaf - Jade',
                    'Flower - Domestic',
                    'Vine',
                    'Poppy',
                    'Grass, Dandelion',
                    'Bamboo',
                    'Flower - Wild',
                    'Carnivorous'
                ],
                fruitVeg: [
                    'Asparagus',
                    'Pinecone',
                    'Berry, Grapes',
                    'Ginger',
                    'Tree Fruit (Apple, Orange)',
                    'Bean',
                    'Pumpkin, Gourd',
                    'Broccoli, Artichoke',
                    'Corn',
                    'Grain, Wheat',
                    'Pineapple'
                ],
                fungi: [
                    'Moss',
                    'Ooze, Jelly',
                    'Lichen',
                    'Mushroom'
                ],
                tree: [
                    'Willow',
                    'Birch',
                    'Maple, Oak',
                    'Banyan',
                    'Pine',
                    'Palm'
                ]
            },
            element: {
                fireElec: [
                    'Fire, Vapor',
                    'Electric Bolt',
                    'Ember, Hot Coal',
                    'Molten Lava'
                ],
                liquid: [
                    'Icicles',
                    'Fog, Vapor',
                    'Wave',
                    'Dew Drops',
                    'Ripple',
                    'Frost, Snow',
                    'Suds, Bubbles',
                    'Tar, Gum'
                ],
                earthMetal: [
                    'Malachite',
                    'Mountain, Cliff Face',
                    'Brick, Cobblestone',
                    'Rust, Oxide',
                    'Cracked Clay',
                    'Stalactite, Stalagmite',
                    'Glass, Crystal',
                    'Powder, Sand',
                    'Slate, Shale',
                    'Cement, Sediment',
                    'Mercury, Chrome'
                ],
                astral: [
                    'Moon Cycles',
                    'Starfield',
                    'Crater, Asteroid',
                    'Solar Flare',
                    'Galaxy Form',
                    'Volcano',
                    'Planets, Saturn\'s Rings',
                    'Cloud, Cyclone'
                ]
            },
            tools: {
                transport: [],
                architect: [],
                tool: [],
                machine: [],
                tool2: [],
                machine2: []
            },
            action: []
        }
    }
});
