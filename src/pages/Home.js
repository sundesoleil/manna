import axios from 'axios';

function Home() {

    function testAxios(){
        axios(
            {
              url: '/api/v1/login',
              method: 'post',
              data: {
                memberLoginId:'admin', memberLoginPassword:'1234'
              }, 
              baseURL: 'http://localhost:9000',
              //withCredentials: true,
            }
          ).then(function (response) {
            console.log(response.data)
            console.log(response.data)
          });



    }    

    return (
        <div>
            <button  onClick={()=> testAxios()}>axiosTest</button>
        </div>
    );
}

export default Home;