import { kos } from "@/data/kos";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>&copy; {new Date().getFullYear()} {kos.name}. {kos.address}</p>
      </div>
    </footer>
  );
}
