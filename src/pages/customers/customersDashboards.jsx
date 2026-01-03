import { useEffect, useState } from "react";
import { getData } from "../../utils/localStorage";
import RestaurantCard from "../../components/RestaurantCard";

export default function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getData());
  }, []);

  return restaurants.map(r => <RestaurantCard key={r.restaurantID} data={r} />);
}