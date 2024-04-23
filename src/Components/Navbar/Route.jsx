const Route = ({ route }) => {
  return (
    <div>
      <li className="mr-10 px-3 hover:bg-orange-300">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Route;
