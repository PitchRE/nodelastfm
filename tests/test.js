const library = require('../index.js')


var lastfm = new library.lastfm('9f04d1d61e6b663276a9e5ab44cfcb73')




// lastfm.userLovedTracks('PitchRE').then(function (result) {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error)
// })


// lastfm.userRecentTracks('PitchRE', 3, 1, null, null, 1).then(function (result) {
//     console.log(result.recenttracks)
// }).catch(function (error) {
//     console.log(error)
// })

// lastfm.userTopAlbums('PitchRE', 5, 1, '1month').then(function (result) {
//     console.log(result.topalbums)
// }).catch(function (error) {
//     console.log(error)
// })

// lastfm.userTopTags('PitchRE', 5).then(function (result) {
//     console.log(result.toptags)
// }).catch(function (error) {
//     console.log(error)
// })


lastfm.userWeeklyTrackChart('PitchRE').then(function (result) {
    console.log(result.weeklytrackchart)
}).catch(function (error) {
    console.log(error)
})