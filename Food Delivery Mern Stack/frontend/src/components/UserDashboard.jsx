import Nav from "./Nav";
import { categories } from "../category";
import CategoryCard from "./CategoryCard";

function UserDashboard() {
  return (
    <div className="flex flex-col gap-5 items-center bg-[#fff9f6]">
      <Nav />
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]">
        <h1 className="text-gray-800 text-2xl sm:text-3xl">
          Inspiration for your first order
        </h1>
        <div className="w-full">
          <div className="w-full flex overflow-x-auto gap-4 pb-2">
            {categories.map((cate, index) => (
              <CategoryCard data={cate} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
