const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    skill: "Overgrow",
    evolution: "Ivysaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    skill: "Blaze",
    evolution: "Charmeleon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    skill: "Torrent",
    evolution: "Wartortle",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    skill: "Static",
    evolution: "Raichu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: 5,
    name: "Eevee",
    type: "Normal",
    skill: "Run Away",
    evolution: "Vaporeon / Jolteon / Flareon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
  },
  {
    id: 6,
    name: "Gengar",
    type: "Ghost/Poison",
    skill: "Cursed Body",
    evolution: "Mega Gengar",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
  },
  {
    id: 7,
    name: "Lucario",
    type: "Fighting/Steel",
    skill: "Inner Focus",
    evolution: "Mega Lucario",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"
  },
  {
    id: 8,
    name: "Snorlax",
    type: "Normal",
    skill: "Immunity",
    evolution: "None",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
  },
  {
    id: 9,
    name: "Dragonite",
    type: "Dragon/Flying",
    skill: "Inner Focus",
    evolution: "None",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
  },
  {
    id: 10,
    name: "Mewtwo",
    type: "Psychic",
    skill: "Pressure",
    evolution: "Mega Mewtwo X / Y",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
  }
];

app.get('/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(p => p.id === id)

    if (pokemon) {
        return res.status(200).json(pokemon)
    }
    
    return res.status(404).json({ error: "Pokemon Não Encontrado!" })
})


app.listen(port, () => {
  console.log(`Aplicação Rodando: http://localhost:${port}`)
})

  