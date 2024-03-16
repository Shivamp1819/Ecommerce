import React from "react";

const AdressCard = (address) => {
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold"> Shivam Patel</p>

        <p>Chhawan, Sidhauli Sitapur, 226017</p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>+91 9134567890</p>
        </div>
      </div>
    </div>
  )
}

export default AdressCard;
