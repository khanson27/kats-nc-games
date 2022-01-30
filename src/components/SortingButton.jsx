const SortingButton = (props) => {
  const { selectedOrder, selectedSort, setSelectedSort, setSelectedOrder } =
    props;

  const handleClick = (e) => {
    setSelectedOrder(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };
  return (
    <>
      {selectedOrder === "DESC" ? (
        <button class="button" onClick={handleClick} value="ASC">
          Ascending
        </button>
      ) : (
        <button class="button" onClick={handleClick} value="DESC">
          Descending
        </button>
      )}
      <br></br>
      <h4>
        Sorted by:{" "}
        {selectedSort.includes("_")
          ? selectedSort.replace("_", " ")
          : selectedSort}
      </h4>
      <button onClick={handleChange} value="created_at">
        created at
      </button>
      <button onClick={handleChange} value="comment_count">
        comment count
      </button>
      <button onClick={handleChange} value="votes">
        votes
      </button>
    </>
  );
};

export default SortingButton;
