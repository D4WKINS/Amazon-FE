

class  extends Component {
    state = {  }

    compoenentWillMount(){
        try{
            const response = await fetch(endpoint,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNGI5OGNlYWY0ODAwMTVjOTE4ZDciLCJpYXQiOjE2MjIwMzY2MTMsImV4cCI6MTYyMzI0NjIxM30.UTCBinfwZqSkRA2yjhaVG7VYcl5qIqBRvWnTtErbg80"
            }})
                const data = await response.json()
                return await data
            
            }
            catch(err){
            return console.log("Houston we have problem!", err)
            }
    }
    render() { 
        return ( 
            <>
            </>
         );
    }
}
 
export default Home