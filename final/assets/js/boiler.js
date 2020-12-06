
function blockChange() {
  return false;
}

function allowChange(bool) {
  return bool
}

function makeRequest() {
  axios({
    url: 'http://localhost:8080/handleData',
    method: 'post',
    data: {
      foo: 'bar'
    }
  })
}
