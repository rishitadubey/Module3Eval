export default function RestaurantCard({data,isAdmin,onDelete}){
      return(
            <div>
                  <img src= {data.image} width ="200"/>
                  <h3>{data.restaurantName}</h3>
                  <p>{data.type}</p>
                                    <p>{data.address}</p>
                  <p>{data.parkingLot ? "ParkingAvailable" : "No parking"}</p>
                  {isAdmin && (
                        <>
                        <button onClick ={()  =>
                              onDelete(data.restaurantID)}>Delete</button>

                                </>

                        )}                 
                  </div>

      );
}