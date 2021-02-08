export default function Book({ img, title, author }) {
  const clickHandler = () => {
    alert("Hello");
  };

  const complexExample = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Alert Hello
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex
      </button>
    </article>
  );
}
