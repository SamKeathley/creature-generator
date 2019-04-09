import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {
            emotions: [],
            animals: {
                sea: [],
                insect: [],
                mammal: [],
                reptile: [],
                bird: [],
                mammal2: []
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
