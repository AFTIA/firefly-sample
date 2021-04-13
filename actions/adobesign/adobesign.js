const axios = require('axios');

async function agreement(headers, agreementBody) {
    try {
        const result = await axios.post('https://api.na1.echosign.com/api/rest/v6/agreements', agreementBody, {
            headers: {
                'Authorization': `Bearer ${headers.auth}`,
                'x-api-user': `${headers.user}`
            }
        });
        return result;
    } catch (e) {
        console.error(e);
    }
}

module.exports.agreement = agreement;