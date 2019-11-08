const axios = require('axios');

function FetchData(query, apikey) {
    return new Promise((resolve, reject) => {
        axios.get(`http://ws.audioscrobbler.com/2.0/?api_key=${apikey}&format=json`, {
            params: query,
        })
            .then(function (response) {
                resolve(response.data)

            })
            .catch(function (error) {
                reject(error)
            })
    })
}





class lastfm {

    // Constructor
    constructor(key) {
        this.apikey = key
    }

    userFriends(username) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getfriends'
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userInfo(username) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getinfo'
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userLovedTracks(username, limit = 50, page = 1) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getlovedtracks',
                limit: limit,
                page: page
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userRecentTracks(username, limit = 50, page = 1, from = null, to = null, extended = false) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getrecenttracks',
                limit: limit,
                page: page,
                from: from,
                to: to,
                extended: extended
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })

    }
    userTopAlbums(username, limit = 50, page = 1, period = 'overall') {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.gettopalbums',
                limit: limit,
                page: page,
                period: period,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }

    userTopArtists(username, limit = 50, page = 1, period = 'overall') {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.gettopartists',
                limit: limit,
                page: page,
                period: period,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userTopTracks(username, limit = 50, page = 1, period = 'overall') {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.gettoptracks',
                limit: limit,
                page: page,
                period: period,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }

    userTopTags(username, limit = 50) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.gettoptags',
                limit: limit,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userWeeklyAlbumChart(username, from = null, to = null) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getweeklyalbumchart',
                from: from,
                to: to,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userWeeklyArtistChart(username, from = null, to = null) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getWeeklyArtistChart',
                from: from,
                to: to,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userWeeklyChartList(username) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getWeeklyChartList',
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    userWeeklyTrackChart(username, from = null, to = null) {
        return new Promise((resolve, reject) => {
            FetchData({
                user: username,
                method: 'user.getWeeklyTrackChart',
                from: from,
                to: to,
            }, this.apikey).then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error)
            })
        })
    }
}

module.exports.lastfm = lastfm; 