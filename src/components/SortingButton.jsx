const SortingButton = (props) => {
  const handleAscendingClick = (e) => {
    props.setSelectedOrder("ASC");
  };

  const handleDescendingClick = () => {
    props.setSelectedOrder("DESC");
  };
  const handleChange = (e) => {
    props.setSelectedSort(e.target.value);
  };
  return (
    <>
      <button onClick={handleAscendingClick} value="ASC">
        Ascending
      </button>
      <button onClick={handleDescendingClick} value="DESC">
        Descending
      </button>
      <label for="sort">Sort by</label>
      <select
        name={props.selectedSort}
        id={props.selectedSort}
        onChange={handleChange}
      >
        <option value="choose" selected disabled>
          Choose an option
        </option>
        <option value="created_at">Created At</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </>
  );
};

export default SortingButton;
