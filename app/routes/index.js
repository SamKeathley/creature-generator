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
                plant: [],
                fruitVeg: [],
                fungi: [],
                tree: []
            },
            element: {
                fireElec: [],
                liquid: [],
                earthMetal: [],
                astral: []
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
