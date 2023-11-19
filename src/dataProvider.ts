// import jsonServerProvider from "ra-data-json-server";

// export const dataProvider = jsonServerProvider(
//   import.meta.env.VITE_JSON_SERVER_URL
// );

import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import orderBy from 'lodash/orderBy'

import data from './mock.json'

// const apiUrl = 'http://localhost:4444/';
// const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const start = (page - 1) * perPage;
        const end = page * perPage;
        const filteredData = data[resource].slice(start, end);

        const sortedData = orderBy(filteredData, [field], [order === 'ASC' ? 'asc' : 'desc']);

        return Promise.resolve({
            data: sortedData,
            total: data[resource].length,
        });
    },
    getOne: (resource, params) => {
        return Promise.resolve({
            data: data[resource][+params.id-1],
        })
    },
    update: (resource, params) => {
        console.log(params)
        const previousData = data[resource][+params.id-1]
        data[resource][+params.id-1] = params
        return Promise.resolve({
            id: params.id,
            data: data[resource][+params.id-1],
            previousData
        })
    },
        // httpClient(`${apiUrl}/${resource}/${params.id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(params.data),
        // }).then(({ json }) => ({ data: json })),

    // create: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}`, {
    //         method: 'POST',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({
    //         data: { ...params.data, id: json.id },
    //     })),
    //
    delete: (resource, params) => {
        const previousData = data[resource][+params.id-1]
        return Promise.resolve({
            id: params.id,
            previousData
        })
    }
        // httpClient(`${apiUrl}/${resource}/${params.id}`, {
        //     method: 'DELETE',
        // }).then(({ json }) => ({ data: json })),

    // deleteMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
    //         method: 'DELETE',
    //     }).then(({ json }) => ({ data: json }));
    // }
};
