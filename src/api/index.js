import  http  from "./http";

const prefix = {
  sample: 'https://api.douban.com/v2/book/1220562',
  abc: "abc",
  bcd: "bcd",
  test: "v2"
}

const api = {
  home: {
    pre: "thispre",
    one: () => http.get({url: prefix.abc + this.pre + 'abc', params: {name: 'jim'}}),
    bcd: () => http.get({url: prefix.bcd + 'bcd', params: {name: 'Green'}}),
    test: () => http.get({url: prefix.test + '/book/1220562'}),
  }
}

export default api;
