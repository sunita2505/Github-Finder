class Github{
   constructor() {
       this.client_id='57e73d2afb5cab7927c8';
        this.client_secret= '63ddabab5c5182ac1b0621d3ef89b7f87a7ae1eb';
        this.repos_count=50;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per _page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await reposResponse.json();

        return{
           profile,
           repos
           
        }
    }
}