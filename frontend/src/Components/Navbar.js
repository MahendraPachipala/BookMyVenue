import React from "react";

const Navbar = () => {
    return (
        <div>
        <div className="flex flex-row justify-around bg-blue-500 p-1">
         <div className = "flex flex-row justify-around bg-blue-500 p-1">
            <a href="/Home" className = "p-1 m-3  border-b-4 border-transparent hover:border-white text-white  text-lg">Home</a>
            <a href="/WeddingHome" className = "p-1 m-3 hover:border-b-4 text-white  text-lg">Venues</a>
            <a href="/vendors" className = "p-1 m-3 hover:border-b-4 text-white  text-lg">Vendors</a>
         </div>
         <div>
            <img className = "h-10 w-10 rounded-full p-1 m-3 " src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400" ></img>
         </div> 
        </div>
        </div>
    );
}

export default Navbar;
