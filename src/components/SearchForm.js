export const SearchForm = ({
  handleSubmit,
  loading,
  setSearchQuery,
  searchQuery,
}) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={searchQuery} onChange={handleChange} />
      </label>
      <input disabled={loading} type="submit" value="Submit" />
    </form>
  );
};
