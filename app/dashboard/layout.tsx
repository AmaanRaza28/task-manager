import Navbar from "../ui/Navbar";
import Search from "../ui/Search";
import SideNav from "../ui/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row pt-12 md:pt-0">
        <SideNav />
        <div className="flex-1 flex flex-col md:pl-64">
          <Search />
          {children}
        </div>
      </div>
    </div>
  );
}
