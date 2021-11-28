const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent', 
            'Active', 
            'Alert', 
            'Faithful', 
            'Trainable', 
            'Instinctual', 
        ],
    }, 
    {
        id: 'dog-2',
        name: 'Bernese mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
    }, 
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: [
            'Intelligent', 
            'Even Tempered', 
            'Kind', 
            'Agile', 
            'Outgoing', 
            'Trusting', 
            'Gentle',
        ],
    }, 
    {
        id: 'dog-4',
        name: 'Samoyed',
        temperament: [
            'Intelligent', 
            'Fast',
            'Happy',
            'Smily',
        ],
    },
]

console.log(dogs.find(dog=>dog.name==='Bernese Mountain Dog'))
console.log(dogs.find(dog=>dog.temperament.includes('Aggresive')))
console.log(dogs.find(dog=>dog.temperament.includes('Trusting')))
console.log(dogs.find(dog=>dog.temperament.includes('Trusting')))
console.log(dogs.find(dog=>dog.temperament.includes('Intelligent')))

console.log(dogs.find(dog=>dog.name==='Samoyed'))
console.log(dogs.find(dog=>dog.temperament.includes('Happy')))

console.log(dogs.map(dog=>dog.name))
console.log(dogs.filter(dog=>dog.temperament.includes('Faithful')))
console.log(dogs.reduce((allTemperaments, dog)=>[...allTemperaments,...dog.temperament],[]))

