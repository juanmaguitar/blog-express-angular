function ApiService ($http) {
  function getPosts () {
    return $http.get('/api/posts')
            .then(res => res.data)
  }

  function savePost (postData) {
    var id = postData.id
    if (id === '0') {
      return $http.post('/api/posts', postData)
    } else {
      return $http.post(`/api/post/${id}`, postData)
    }
  }

  function deletePost (id) {
    return $http.delete(`/api/post/${id}`)
  }

  function getDetailsPost (id) {
    return $http.get(`/api/post/${id}`)
              .then(res => res.data)
  }

  return { getPosts, savePost, deletePost, getDetailsPost }
}

ApiService.$inject = ['$http']

export default ApiService
