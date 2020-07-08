
import axios from 'axios';

class CovidAPI {
    url = 'https://covid19.mathdro.id/api';
    indoUrl = 'https://indonesia-covid-19.mathdro.id/api';

    getDataGlobal(){
        return axios.get(`${this.url}`);
    }

    getDataIndonesia(){
        return axios.get(`${this.url}/countries/ID`);
    }

    getDataConfirmed(){
        return axios.get(`${this.url}/confirmed`);
    }

    getDataDaily(){
        return axios.get(`${this.url}/daily`);
    }

    getDataProvinsi(){
        return axios.get(`${this.indoUrl}/provinsi`);
    }

}

export default CovidAPI