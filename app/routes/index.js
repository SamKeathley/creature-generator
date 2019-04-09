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
                transport: [
                    'Car, Truck, Bus',
                    'Aircraft',
                    'Rail, Train, Trolly',
                    'Cycle',
                    'Sled, Ski',
                    'Boat, Ship',
                    'Spacecraft',
                    'Tank Tread'
                ],
                architect: [
                    'Ornament, Gargoyle',
                    'Bridge, Framework',
                    'Castle, Domed',
                    'Ornament, Pillar',
                    'Modern Skyscraper',
                    'Place of Worship, Totem',
                    'Doorway, Archway',
                    'Old Village, Cottage'
                ],
                tool: [
                    'Drill',
                    'Cups, Plates',
                    'Umbrella',
                    'Bundle, Bale',
                    'Hammer, Axe',
                    'Brush - Hair, Tooth',
                    'Razor, Knife',
                    'Spigot, Faucet',
                    'Rope',
                    'Silverware',
                    'Lock, Key'
                ],
                machine: [
                    'Switch, Dial, Button',
                    'Turbine',
                    'Bulb, Lamp',
                    'Clock, Gears',
                    'Fan, Propeller',
                    'Saw'
                ],
                tool2: [
                    'Adhesive, Bandage',
                    'Shovel, Pick',
                    'Capsule, Tablet',
                    'Nuts, Bolts',
                    'Chain',
                    'Thread, Stitch',
                    'Shears, Scissors',
                    'Pen, Paintbrush',
                    'Spring, Coil',
                    'Syringe',
                    'Tube, Plumbing'
                ],
                machine2: [
                    'Reactor Core',
                    'Telephone',
                    'Solar Panel',
                    'Engine',
                    'Laser Beam',
                    'Microchip',
                    'Dish, Antenna',
                    'Rocket'
                ]
            },
            action: [
                'Recoil, Akimbo',
                'Drenched, Thirsty',
                'Blown by Cyclone',
                'Pushing, Pulling',
                'Snooping, Listening',
                'Crouched for Attack',
                'Hanging, Climbing',
                'Recoil, Head/Torso',
                'Floating, Levitating',
                'Swinging Weapon',
                'Twisting, Stretching',
                'Kicking, Punching',
                'Squeezing, Tackling',
                'Absorbing, Eating',
                'Limping, Injured',
                'Cursing, Swearing',
                'Running, Jumping',
                'Melt, Glow, Fire',
                'Stuck, Trapped',
                'Shooting Weapon',
                'Dying, Gaunt',
                'Flying, Swimming',
                'Shedding, Molting',
                'Chanting, Reciting',
                'Punching, Kicking',
                'Crawling, Emerging'
            ]
        }
    }
});
