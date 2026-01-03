export default function AddRestaurantForm({ addRestaurant }) {
  const initial = {
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: "",
    image:
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  };

  const [form, setForm] = useState(initial);

  const handleAdd = () => {
    if (!form.restaurantName || !form.address || !form.type) {
      return alert("All fields required");
    }

    addRestaurant({
      ...form,
      restaurantID: Date.now(),
      parkingLot: form.parkingLot === "true"
    });

    setForm(initial);
  };

  return (
    <div>
      <input value={form.restaurantName} onChange={e => setForm({...form, restaurantName: e.target.value})} />
      <input value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
      <select onChange={e => setForm({...form, type: e.target.value})}>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select onChange={e => setForm({...form, parkingLot: e.target.value})}>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}