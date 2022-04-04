import { useRouter } from 'next/router';
import axios from 'axios';
import nookies from 'nookies';
import Layout from "../components/Layouts"

type Props = {
    user: any
}
const Profile = (props: Props) => {
  const router = useRouter();
//   const { user: { email, username } } = props;

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Layout>
        {JSON.stringify(props)}
      {/* <div>Username: {username}</div>
      <div>Email: {email}</div> */}
      <button onClick={logout}>Logout</button>
    </Layout>
  )
}

export const getServerSideProps = async (ctx:any) => {
  const cookies = nookies.get(ctx)
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

//   if (!user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/'
//       }
//     }
//   }

  return {
    props: {
      user
    }
  }
}

export default Profile;