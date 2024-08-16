export const Ingredient = (props) => {
  const { name, amount, measurement } = props;

  return (
    <ul>
      <li>
        {name}
        {amount}
        {measurement}
      </li>
    </ul>
  );
};
