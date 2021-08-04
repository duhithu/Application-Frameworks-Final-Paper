import axios from 'axios';
import { fetchData } from '../../components/createCategory/createCategory';
import { fetchAdminData } from '../../component/createVehicle/createVehicle';
jest.mock('axios');

it('Fetches data correctly from the URL http://localhost:8087/category/ ',  () => {
    const errorMessage = 'Incorrect URL accessed';
    axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
    );
    expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:8087/category/`,
    );
});
it('Fetches data correctly from the URL http://localhost:8087/vehicle/` ',  () => {
    const errorMessage = 'Incorrect URL accessed';

    axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
    );
    expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:8087/vehicle/`,
    );
});