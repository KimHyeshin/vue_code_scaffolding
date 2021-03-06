import axios from 'axios';
import {store} from '../store/store';

/**
 * HTTP 통신부가 구현 된다.
 */

export default class ClientAPI {

    constructor(){
    }

    request (url, config) {
        return axios({
            url: store.getters.CONSTANTS.DOMAIN + url,
            ...config
        }).then(result => result.data)
            .catch(result => {
                console.log(result.response);
                new Error(`ClientAPI ${url} Error!!`);
                throw result.response;
            })
    }

    /**
     * API-ID-1 직원 리스트 조회
     * 직원 리스트 정보를 요청한다.
     *
     * @returns {Promise<unknown>}
     */
    getEmployeeList () {
        return this.request('/api/v1/employees', {
            method: 'get',
            params: {}
        })
    }

    /**
     * API-ID-2 직원 정보 조회
     * 특정 직원의 정보를 요청한다.
     *
     * @returns {Promise<unknown>}
     */
    getEmployeeInfo (options) {
        return this.request(`/api/v1/employees/${options.id}`, {
            method: 'get',
            params: {}
        })
    }

}
