import axios from "axios";

class Response() 

class BetterAxios {
    constructor(...args) {
        this.session = axios.create(...args)
    }

    async get(url, config) {
        return await this.session.get(url, config)
    }

    async post(url, config) {
        return await this.session.post(url, config)
    }

    async put(url, config) {
        return await this.session.put(url, config)
    }

    async delete(url, config) {
        return await this.session.delete(url, config)
    }

    async patch(url, config) {
        return await this.session.patch(url, config)
    }

    async head(url, config) {
        return await this.session.head(url, config)
    }

    async options(url, config) {
        return await this.session.options(url, config)
    }
}

export default BetterAxios