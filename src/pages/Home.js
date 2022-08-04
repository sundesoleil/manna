import axios from 'axios';

function Home() {

    const log = console.log;

    async function test() {
        const response = await axios.get(`/api/v1/login/find-member-login-id`, {
        params: {
            memberLoginId: 'admin',
            },
        });
        log(response);

        if (response.data.success) {
        log('# 이미 존재하는 아이디임 - 로그인페이지로');
        } else {
        log('# 이미 안 존재하는 아이디임 - 회우너가입페이지로');
        }
        return response;
    }


    async function testAxios() {
        const loginResponse = await axios.post(`/api/v1/login`, {
            memberLoginId: 'Hazle',
            memberLoginPassword: '1234',
        });
        log(loginResponse);
        return loginResponse;
    }

    return (
        <div>
            <button  onClick={()=> testAxios()}>axiosTest</button>
        </div>
    );
}

export default Home;