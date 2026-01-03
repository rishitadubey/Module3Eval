import { useEffect, useState } from "react";
import { getData, setData } from "../../utils/localStorage";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import RestaurantCard from "../../components/RestaurantCard";

export default function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getData());
  }, []);

  const addRestaurant = (res) => {
    const updated = [...restaurants, res];
    setData(updated);
    setRestaurants(updated);
    alert("Restaurant Added");
  };

  const deleteRestaurant = (id) => {
    if (!confirm("Are you sure?")) return;
    const updated = restaurants.filter(r => r.restaurantID !== id);
    setData(updated);
    setRestaurants(updated);
    alert("Deleted Successfully");
  };

  return (
    <div>
      <AddRestaurantForm addRestaurant={addRestaurant} />
      <div>
        {restaurants.map(r => (
          <RestaurantCard
            key={r.restaurantID}
            data={r}
            isAdmin
            onDelete={deleteRestaurant}
          />
        ))}
      </div>
    </div>
  );
}