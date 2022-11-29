const  express = require('express')
const app = express()
const PORT = 5000

let artists = {
    'amaarae': {
        'age': 28,
        'birthName': 'Ama Serwah Genfi',
        'birthdate': '4th July 1994', 
        'birthLocation': 'New York, United States',
        'origin': 'Accra, Ghana',
        'genre': 'Afrobeats, R&B/Soul, Contemporary R&B, Soul music, Afropop',
        'occupation': 'singer, songwriter, producer, and sound engineer',
        'yearsActive': '2010-present',
        'labels': '0207 Def Jam, Interscope Records',
        'children': 'none'
    },
    'odunsi the engine': {
        'age': 26,
        'birthName': 'Bowofoluwa Olufisayo Odunsi',
        'birthdate': '7th June, 1996', 
        'birthLocation': 'Lagos, Nigeria',
        'origin': 'Nigeria',
        'genre': ' Afro-pop, R&B, funk, disco, and 80s-inspired indie synth-pop',
        'occupation': 'singer, songwriter, producer, and sound engineer',
        'yearsActive': '2016-present',
        'labels': ' Kimani Moore Entertainment, ODUNSI THE ENGINE, Independent, Not Specified',
        'children': 'none'
    },
    'cruel santino': {
        'age': 30,
        'birthName': 'Osayaba Andrew Ize-Iyamu',
        'birthdate': ' 3 June 1992', 
        'birthLocation': 'Lagos, Nigeria',
        'origin': 'Edo, Nigeria',
        'genre': ' R&B, soul, Rap, Neo-Afropop, Hip hop Alté and Indie ',
        'occupation': 'singer-songwriter, rapper, creative director, filmmaker, and Music video director',
        'yearsActive': '2011-present',
        'labels': 'Love Renaissance, Interscope Records, Warner Chappell Music',
        'children': 'none'
    },
    'lady donli': {
        'age': 26,
        'birthName': 'Zainab Elizabeth Donli',
        'birthdate': '20 September 1996', 
        'birthLocation': ' Cleveland, Ohio',
        'origin': 'Kaduna, Nigeria',
        'genre': ' Afrobeat, Contemporary R&B, Hip-Hop, Alternative jazz, and Soul',
        'occupation': '	Singer, Songwriter',
        'yearsActive': '2012-present',
        'labels': ' Bad Moon, Lady Donli, Makiyayi, P-VINE, SAFI',
        'children': 'none'
    },
    'tay iwar': {
        'age': 25,
        'birthName': 'Austin Iornongu Iwar',
        'birthdate': '9th June 1997', 
        'birthLocation': 'Marina, Lagos',
        'origin': 'Nigeria',
        'genre': '	Alté R&B Neo Soul',
        'occupation': 'Neo soul singer, songwriter, record producer, composer and sound engineer.',
        'yearsActive': '2013-present',
        'labels': 'BANTU Soulection Warner Chappell Music',
        'children': 'none'
    },
    'wavy the creator': {
        'age': 28,
        'birthName': 'Jennifer Ejoke',
        'birthdate': '4 July 1994', 
        'birthLocation': 'Lagos',
        'origin': 'South-west, Nigeria',
        'genre': 'Alternative R&B, Pop, Alté',
        'occupation': 'Artist, photographer, fashion designer and film-maker',
        'yearsActive': '2017-present',
        'labels': 'Disturbing London',
        'children': 'none'
    },
    'temmie ovwasa': {
        'age': 26,
        'birthName': 'Temmie Ovwasa',
        'birthdate': '29 November 1996', 
        'birthLocation': 'Ilorin, Nigeria',
        'origin': 'Delta, Nigeria',
        'genre': 'Alternative R&B, a blend of afro pop, soft rock and soul',
        'occupation': 'singer, songwriter, visual artist, ',
        'yearsActive': '2016-present',
        'labels': 'TemmieOvwasa Records',
        'children': 'none'
    },
    'wurld': {
        'age': 35,
        'birthName': 'Sadiq Onifade',
        'birthdate': '2 January 1987', 
        'birthLocation': 'Lagos, Nigeria',
        'origin': 'Lagos, NIgeria',
        'genre': 'Electronic, soul, pop',
        'occupation': 'Singer; songwriter; record producer',
        'yearsActive': '2012-present',
        'labels': 'WEAREGVDS',
        'children': 'none'
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')

})

app.get('/api/:artistName', (req, res) =>{
   const artistsName = req.params.artistName.toLowerCase()
   if (artists[artistsName]){
    res.json(artists[artistsName])

   }else{
    res.json(artists['unknown'])
   }
  
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}! Go catch it!`)
})