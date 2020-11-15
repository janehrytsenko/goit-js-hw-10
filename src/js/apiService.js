export default class apiService {
    constructor() {
        this.serchQuery = '';
        this.page = 1;
}
    
    async fetchImg() {
   
    const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
    const API_KEY = '19029120-3d5d472043b9b4c189da88885'
    const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
      
        const response = await fetch(url)
        const newImg = response.json()
        const markup = newImg.then(data => {
                this.incrementPage();
                
                return data.hits;
            });    
      return markup  
}   
    incrementPage() {
       this.page += 1 
    } 

    resetPage() {
        this.page = 1;
    }

     get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }
}