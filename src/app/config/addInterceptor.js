function addInterceptor ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor')
}

addInterceptor.$inject = ['$httpProvider']

export default addInterceptor
