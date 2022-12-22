import utilStyles from '../styles/utils.module.scss';

export default function Loading() {
  return (
    <div className={utilStyles.loading}>
      <div className={utilStyles.ldsEllipsis }><div></div><div></div><div></div><div></div></div>
    </div>
  )
}