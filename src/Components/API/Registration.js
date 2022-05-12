import {Auth} from 'aws-amplify';

async function SignUp() {
  try {
    const {user} = await Auth.signUp({
      username: 'test',
      password: 'test',
      attributes: {
        email: 'jas@jas.co',
        phone_number: '+123456789',
      },
    });
    console.log('user', user);
  } catch (err) {
    console.log('error', err);
  }
}

export default SignUp;
