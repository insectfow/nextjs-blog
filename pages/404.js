import error from '../styles/error.module.scss';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={error.errorPage}>
      <h2>404 - Page Not Found</h2>
      <div className={error.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}