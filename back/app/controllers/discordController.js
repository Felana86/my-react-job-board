const fetch = require('node-fetch');
const axios = require('axios');
const qs = require('qs');

const discordController = {

    fetchDiscord: async (_, response) => {

        try {
            const data = qs.stringify({
                // 'grant_type': 'client_credentials',
                'client_id': process.env.CLIENT_ID_DISCORD,
                'client_secret': process.env.CLIENT_SECRET_DISCORD,
                'scope': 'application_PAR_jobboard_bbd66325e3c090fee72f14d54ccb6bc6fe98dd16eb100d9840ac47bb35c0adef api_offresdemploiv2 o2dsoffre'
            });

            // this is similar to fetch(url, { method: 'POST', headers: headers, body: data}).then ...:
            const config = {
                method: 'post',
                url: 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: data
            };
        
            const resAxios = await axios(config)
            // console.log(resAxios.data.access_token)
            const headersRequest = {
                'Authorization': resAxios.data.token_type + ' ' + resAxios.data.access_token,
            };
            const urlRequest = "https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=react";
            const responseJobs = await fetch(urlRequest, { method: 'GET', headers: headersRequest });
            const jobs = await responseJobs.json();  
            response.json(jobs.resultats);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = discordController;