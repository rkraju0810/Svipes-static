import Aboutapp  from "@/components/Home/Aboutapp";
import { Alert } from "@/components/Home/Alert";
import Footer from "@/components/Home/Footer";
import Get from "@/components/Home/Get";
import Header from "@/components/Home/Header";
import { Stay } from "@/components/Home/Stay";




import { Store } from "@/components/Home/Store";


export default function Home() {
  return (
    <main className="w-full">
  <Alert />
  <Header />
  <Store />
  <Aboutapp />
  <Stay />
  <Get />
 

    </main>
  );
}
