import { useState, useRef } from "react";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Loading from "../components/loading";

const List = ({ data, title }) => {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState(data);
  const [loading, setLoading] = useState(false);
  const titleRef = useRef();
  const timer = 500;
  const SearchNews = async () => {
    if (input === "") {
      return alert("검색어를 입력해~");
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
            setInput("");

            titleRef.current.click();
          }, timer);
        });
    }
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    return setInput(value);
  };

  const replaceStr = (str) => {
    if (str && typeof str === "string") {
      str = str
        .replace(/&lt;/g, "")
        .replace(/&gt;/g, "")
        .replace(/&apos;/g, "")
        .replace(/&amp;/g, "")
        .replace(/&quot;/g, "");
      str = str.replace(/<[^>]*>?/g, "");
    }
    return str;
  };
  return (
    <section id={title} className={utilStyles.headingMd}>
      <h1 className={utilStyles.title}>
        {title}
        <div>
          <input placeholder="검색어" type="text" value={input} onChange={onChange}></input>
          <button onClick={SearchNews}>검색</button>
        </div>
      </h1>
      {loading && <Loading />}
      <ul className={utilStyles.list}>
        {!listData.items
          ? "데이터가 없어요~"
          : listData.items.map(({ pubDate, title, link }) => (
              <li className={utilStyles.listItem} key={link + "listData"}>
                <Link href={link} value={title}>
                  {replaceStr(title)}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{pubDate}</small>
              </li>
            ))}
      </ul>
      <a ref={titleRef} href={"#" + title}></a>
    </section>
  );
};

export default List;
