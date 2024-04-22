import React, { useState } from "react";
import { Vol } from "../../../services/types";

const EditFlightForm: React.FC<{
    vol: Vol;
    onClose: () => void;
    onSave: (id: number, volDetails: Vol) => Promise<void>;
}> = ({ vol, onClose, onSave }) => {
    const [origin, setOrigin] = useState(vol.origin.nom);
    const [destination, setDestination] = useState(vol.destination.nom);
    const [heureDepart, setHeureDepart] = useState(vol.heureDepart);
    const [heureArrivee, setHeureArrivee] = useState(vol.heureArrivee);
    const [price, setPrice] = useState(vol.prix);
    const [placesDisponibles, setPlacesDisponibles] = useState(vol.placesDisponibles);
    const [imageUrl, setImageUrl] = useState(vol.imageUrl);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const updatedVolDetails = {
            ...vol,
            origin: { ...vol.origin, nom: origin },
            destination: { ...vol.destination, nom: destination },
            heureDepart,
            heureArrivee,
            prix: price,
            placesDisponibles,
            imageUrl
        };
        await onSave(vol.idVol, updatedVolDetails);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <img
                            src={vol.imageUrl}
                            alt="Vol Image"
                            className="rounded-full w-20 h-20 object-cover border-2 border-gray-300 shadow-sm"
                        />

                    </div>
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Edit the image Url</label>
                        <input
                            type="file"
                            id="imageUrl"
                            // value={imageUrl}
                            // onChange={(e) => setImageUrl(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
                        <input
                            type="text"
                            id="origin"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="destination"
                               className="block text-sm font-medium text-gray-700">Destination</label>
                        <input
                            type="text"
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="heureDepart" className="block text-sm font-medium text-gray-700">Departure
                            Date</label>
                        <input
                            type="datetime-local"
                            id="heureDepart"
                            value={heureDepart}
                            onChange={(e) => setHeureDepart(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="heureArrivee" className="block text-sm font-medium text-gray-700">Arrival
                            Date</label>
                        <input
                            type="datetime-local"
                            id="heureArrivee"
                            value={heureArrivee}
                            onChange={(e) => setHeureArrivee(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="placesDisponibles" className="block text-sm font-medium text-gray-700">Available
                            Seats</label>
                        <input
                            type="number"
                            id="placesDisponibles"
                            value={placesDisponibles}
                            onChange={(e) => setPlacesDisponibles(Number(e.target.value))}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFlightForm;
