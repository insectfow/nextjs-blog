import { GoogleProvider, GithubProvider, signPopup } from '../lib/firebase';
import authStyles from '../styles/auth.module.scss';
import Image from 'next/image';
import GoogleIcon from '../public/images/google.svg';
import GitHubIcon from '../public/images/github.svg';

const SocialForm = () => {
  
  const onSocailClick = async (event) => {
    let provider;
    const {
      target: { name },
    } = event;

    if (name === 'google') {
      provider = GoogleProvider;
    } else if (name === 'github') {
      provider = GithubProvider;
    }
    await signPopup(provider);
  }
  return (
    <>
      <div className={authStyles.socialButtons}>
        <button onClick={onSocailClick} name="google" ><Image src={GoogleIcon} alt='google icon' />Continue with Google</button>
        <button onClick={onSocailClick} name="github"><Image src={GitHubIcon} alt='github icon' />Continue with Github</button>
      </div>
    </>
  );
}

export default SocialForm;