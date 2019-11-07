const axios = require('axios');
const util = require('util')



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



// Constructor

class lastfm {

    constructor(key) {
        this.apikey = key
    }

    doSomething() {

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

}


module.exports.lastfm = lastfm; 