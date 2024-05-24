const api_key = 'YOUR_YELP_API_KEY';//YOUR YELP API KEY GOES HERE
const auth = 'Bearer ' + api_key;
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';//visit https://cors-anywhere.herokuapp.com/corsdemo and click “Request temporary access to the demo server

export default async function getYelpRestaurants(name, location, sort) {
    const endpoint = '/businesses/search';
    let sortBy = '';
    if (sort === 'bestMatch') {
        sortBy = 'best_match';
    } else if (sort === 'highestRated') {
        sortBy = 'rating';
    } else if (sort === 'mostReviewed') {
        sortBy = 'review_count';
    }
    const query = `?categories=food&location=${location}&term=${name}&sort_by=${sortBy}&limit=30`;

    const url = baseUrl + endpoint + query;
    let requestParams = {
        method: 'GET',
        headers: {
            accept: 'application/JSON',
            Authorization: auth,
        },
    }
    try {
        const response = await fetch(url, requestParams);
        if (response.ok) {
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let businesses = jsonResponse.businesses
            return businesses;
        }

        throw new Error('Fetching restaurants from Yelp failed')
    }
    catch (error) {
        console.log(error);
    }
}