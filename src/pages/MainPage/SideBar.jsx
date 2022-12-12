import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFillterOption } from "../../store";
function ChechBoxEl({ name }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{name}</p>
    </li>
  );
}
const SideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFillterOption());
  }, []);
  const { franchiseData: franchises, typeData: type } = useSelector(
    (state) => state.filterReducer.filterOptions
  );
  const frinichisesList = franchises?.map((el) => {
    <chechBoxEl name={el.name} />;
  });
  return (
    <>
      <h2>Filters:</h2>
      <h2>Franchises</h2>
      <ul>{frinichisesList}</ul>
    </>
  );
};
export default SideBar;
