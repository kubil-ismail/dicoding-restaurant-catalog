import ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurant() {
    const response = await fetch(ENDPOINT.GET_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default RestaurantSource;
