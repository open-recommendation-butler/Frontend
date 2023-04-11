import axios from 'axios';

// let DOMAIN = "http://localhost:8001";
let DOMAIN = "https://api.open-recommendation-butler.tech";

export async function GET(path) {
  return axios.get(`${DOMAIN}${path}`)
}

export async function POST(path, data=null) {
  return axios.post(`${DOMAIN}${path}`, data)
}

export async function DELETE(path) {
  return axios.delete(`${DOMAIN}${path}`)
}