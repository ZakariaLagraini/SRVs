import axios from 'axios';
import { Ville } from './types'; // Assuming you have a Ville type defined for TypeScript

const api = axios.create({
    baseURL: 'http://localhost:8080/srv/villes',
    headers: {
        'Content-Type': 'application/json'
    }
});

const villeService = {
    getAllVilles: async () => {
        return api.get<Ville[]>('/');
    },

    getVilleById: async (id: number) => {
        return api.get<Ville>(`/${id}`);
    },

    getByNom: async (nom: string) => {
        return api.get<Ville[]>(`/${nom}`);
    },

    findByPays: async (pays: string) => {
        return api.get<Ville[]>(`/${pays}`);
    },

    findByNomContainingIgnoreCase: async (nom: string) => {
        return api.get<Ville[]>(`/nomIg/${nom}`);
    },


const getAllVilleNames = async (): Promise<string[]> => {
    const response = await axios.get<string[]>(`${API_URL}/noms`);
    return response.data;
};

const saveVille = async (ville: Ville): Promise<Ville> => {
    const response = await axios.post<Ville>(`${API_URL}`, ville);
    return response.data;
};

    save: async (ville: Ville) => {
        return api.post<Ville>('/', ville);
    },


    updateVille: async (id: number, villeDetails: Ville) => {
        return api.put<Ville>(`/${id}`, villeDetails);
    },

    deleteVille: async (id: number) => {
        return api.delete(`/${id}`);
    },

    deleteVilleByNom: async (nom: string) => {
        return api.delete(`/${nom}`);
    },

    deleteVilleByPays: async (pays: string) => {
        return api.delete(`/${pays}`);
    },

    deleteAllVilles: async () => {
        return api.delete('/');
    }
};


export const villeService = {
    getAllVilles,
    getVilleById,
    getByNom,
    findByPays,
    findByNomContainingIgnoreCase,
    getAllVilleNames,
    saveVille,
    updateVille,
    deleteVille,
    deleteVilleByNom,
    deleteVilleByPays,
    deleteAllVilles,
};

export default villeService;

