import { useState } from 'react';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Loading from '../components/loading';

const List = ({data, title}) => {
  const [input, setInput] = useState('');
  const [listData, setListData] = useState(data);
  const [loading, setLoading] = useState(false);
  const timer = 500;
  const SearchNews = async () => {
    if (input === '') {
      return alert('검색어를 입력해~');
    } else {
      
      setLoading(true);

      if (loading) {
        return;
      }

      await fetch(`/api/naver/search?query=${input}&type=${title}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            setLoading(false);
            setListData(data);
            setInput('');
          }, timer);
        })
    }
  }

  const onChange = (e) => {
    const { target: { value } } = e;
    
    return setInput(value);
  }
  return (
    <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.title}>{title}<div><input placeholder='검색어' type='text' value={input} onChange={onChange}></input><button onClick={SearchNews}>검색</button></div></h1>
        { loading && <Loading />  }
        <ul className={utilStyles.list}>
            { !listData.items ? '데이터가 없어요~' : listData.items.map(({ pubDate, title, link }) => (
              <li className={utilStyles.listItem} key={link + 'listData'}>
              <Link href={link}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {pubDate}
              </small>
            </li>
            ))}
        </ul>
        
      </section>
  )
}

export default List;