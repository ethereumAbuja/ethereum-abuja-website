import { redirect } from "next/navigation";
import { store } from "@/store/store";

export default function Home() {
  return redirect("/home");
}
