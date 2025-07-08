import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

 async function submitHandler(event) {
  event.preventDefault();
  //  console.log(url)
  // const url = process.env.REACT_APP_API_URL;
  const apiUrl = import.meta.env.VITE_API_URL;
 
  try {
    // console.log(url)
    const res = await fetch(`${apiUrl}/savedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await res.json();

    if (result.success) {
      console.log("Data saved");
    } else {
      console.log("Something went wrong:", result.message);
    }
  } catch (error) {
    console.log(error.message);
  }
}


  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={submitHandler} className="w-full max-w-2xl bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Ashoutosh"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Tiwari"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ashoutoshtiwari0786@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="country" className="block font-medium">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full border px-3 py-2 rounded"
          >
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="streetAddress" className="block font-medium">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="B-25C"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="city" className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Gyanpur"
              value={formData.city}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="state" className="block font-medium">State</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Delhi"
              value={formData.state}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block font-medium">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="136119"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        <fieldset className="mt-6">
          <legend className="text-lg font-semibold mb-2">By Email</legend>

          <div className="flex items-start gap-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="comments" className="font-medium">Comments</label>
              <p className="text-sm text-gray-600">Get notified when someone posts a comment.</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              id="candidate"
              name="candidate"
              type="checkbox"
              checked={formData.candidate}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="candidate" className="font-medium">Candidate</label>
              <p className="text-sm text-gray-600">Get notified when a candidate applies.</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
              className="mt-1"
            />
            <div>
              <label htmlFor="offers" className="font-medium">Offers</label>
              <p className="text-sm text-gray-600">Get notified on offer decisions.</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-lg font-semibold mb-2">Push Notification</legend>
          <p className="text-sm text-gray-600 mb-2">Delivered via SMS to your phone.</p>

          <div className="flex flex-col gap-2">
            <div>
              <input
                type="radio"
                id="pushEverything"
                name="pushNotification"
                value="everything"
                checked={formData.pushNotification === "everything"}
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything" className="ml-2">Everything</label>
            </div>

            <div>
              <input
                type="radio"
                id="pushemail"
                name="pushNotification"
                value="same as email"
                checked={formData.pushNotification === "same as email"}
                onChange={changeHandler}
              />
              <label htmlFor="pushemail" className="ml-2">Same as Email</label>
            </div>

            <div>
              <input
                type="radio"
                id="pushNothing"
                name="pushNotification"
                value="No Push Notification"
                checked={formData.pushNotification === "No Push Notification"}
                onChange={changeHandler}
              />
              <label htmlFor="pushNothing" className="ml-2">No Push Notification</label>
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
